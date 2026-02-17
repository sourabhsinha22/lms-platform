// server.js - Complete LMS Platform Server
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "lms-platform-secret-key-change-in-production";
const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data", "lms.db");

// ═══════════════════════════════════════════════════════════════
// DATABASE SETUP (SQLite via sql.js)
// ═══════════════════════════════════════════════════════════════

let db;

async function initDatabase() {
  const initSqlJs = require("sql.js");
  const SQL = await initSqlJs();

  // Ensure data directory exists
  const dataDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  // Load existing or create new database
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  // Create tables
  db.run(`
    CREATE TABLE IF NOT EXISTS organizations (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      industry TEXT DEFAULT 'GENERAL',
      plan TEXT DEFAULT 'FREE',
      theme_config TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      avatar TEXT,
      role TEXT DEFAULT 'LEARNER',
      status TEXT DEFAULT 'ACTIVE',
      org_id TEXT NOT NULL,
      points INTEGER DEFAULT 0,
      streak INTEGER DEFAULT 0,
      job_title TEXT,
      bio TEXT,
      last_active_at DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(email, org_id),
      FOREIGN KEY (org_id) REFERENCES organizations(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      org_id TEXT NOT NULL,
      UNIQUE(slug, org_id),
      FOREIGN KEY (org_id) REFERENCES organizations(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS courses (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL,
      description TEXT,
      thumbnail TEXT,
      difficulty TEXT DEFAULT 'BEGINNER',
      status TEXT DEFAULT 'PUBLISHED',
      duration TEXT,
      tags TEXT,
      ce_credits REAL DEFAULT 0,
      badge_name TEXT,
      badge_icon TEXT DEFAULT '🏅',
      instructor_name TEXT,
      instructor_bio TEXT,
      org_id TEXT NOT NULL,
      category_id TEXT,
      enrolled_count INTEGER DEFAULT 0,
      avg_rating REAL DEFAULT 0,
      published_at DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(slug, org_id),
      FOREIGN KEY (org_id) REFERENCES organizations(id),
      FOREIGN KEY (category_id) REFERENCES categories(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS modules (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      "order" INTEGER DEFAULT 0,
      course_id TEXT NOT NULL,
      FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS lessons (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT DEFAULT 'READING',
      "order" INTEGER DEFAULT 0,
      duration INTEGER DEFAULT 10,
      content TEXT,
      module_id TEXT NOT NULL,
      FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      course_id TEXT NOT NULL,
      status TEXT DEFAULT 'ACTIVE',
      progress REAL DEFAULT 0,
      started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      completed_at DATETIME,
      rating REAL,
      UNIQUE(user_id, course_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS lesson_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      lesson_id TEXT NOT NULL,
      completed INTEGER DEFAULT 0,
      score REAL,
      completed_at DATETIME,
      UNIQUE(user_id, lesson_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS experts (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT,
      specialty TEXT,
      bio TEXT,
      avatar TEXT,
      rating REAL DEFAULT 5,
      sessions_count INTEGER DEFAULT 0,
      available INTEGER DEFAULT 1,
      next_slot TEXT,
      rate TEXT,
      org_id TEXT NOT NULL,
      FOREIGN KEY (org_id) REFERENCES organizations(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      expert_id TEXT NOT NULL,
      status TEXT DEFAULT 'SCHEDULED',
      scheduled_at DATETIME,
      notes TEXT,
      rating REAL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (expert_id) REFERENCES experts(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS certificates (
      id TEXT PRIMARY KEY,
      credential_id TEXT UNIQUE,
      user_id TEXT NOT NULL,
      course_id TEXT NOT NULL,
      org_id TEXT NOT NULL,
      ce_credits REAL DEFAULT 0,
      issued_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (course_id) REFERENCES courses(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS invitations (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL,
      role TEXT DEFAULT 'LEARNER',
      token TEXT UNIQUE,
      org_id TEXT NOT NULL,
      expires_at DATETIME,
      accepted_at DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (org_id) REFERENCES organizations(id)
    )
  `);

  saveDb();
  console.log("✅ Database initialized");
}

function saveDb() {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

function uid() {
  return "id_" + Math.random().toString(36).substr(2, 12) + Date.now().toString(36);
}

function query(sql, params = []) {
  try {
    return db.exec(sql, params);
  } catch (e) {
    console.error("SQL Error:", e.message, sql);
    return [];
  }
}

function run(sql, params = []) {
  try {
    db.run(sql, params);
    saveDb();
    return true;
  } catch (e) {
    console.error("SQL Error:", e.message, sql);
    return false;
  }
}

function getAll(sql, params = []) {
  const stmt = db.prepare(sql);
  if (params.length) stmt.bind(params);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

function getOne(sql, params = []) {
  const rows = getAll(sql, params);
  return rows[0] || null;
}

// ═══════════════════════════════════════════════════════════════
// SEED DATA
// ═══════════════════════════════════════════════════════════════

async function seedDatabase() {
  // Check if already seeded
  const orgCount = getOne("SELECT COUNT(*) as c FROM organizations");
  if (orgCount && orgCount.c > 0) {
    console.log("📦 Database already seeded");
    return;
  }

  console.log("🌱 Seeding database...");
  const adminHash = await bcrypt.hash("admin123", 10);
  const learnerHash = await bcrypt.hash("learn123", 10);
  const mgrHash = await bcrypt.hash("mgr123", 10);

  const orgs = [
    { id: uid(), slug: "mindwell", name: "MindWell", industry: "WELLNESS", theme: "wellness" },
    { id: uid(), slug: "nursepath", name: "NursePath", industry: "HEALTHCARE", theme: "healthcare" },
    { id: uid(), slug: "campuslearn", name: "CampusLearn", industry: "EDUCATION", theme: "education" },
  ];

  for (const org of orgs) {
    run("INSERT INTO organizations (id, name, slug, industry, plan, theme_config) VALUES (?,?,?,?,?,?)",
      [org.id, org.name, org.slug, org.industry, "PROFESSIONAL", JSON.stringify({ themeId: org.theme })]);
  }

  // Users per org
  const usersData = {
    mindwell: [
      { email: "admin@mindwell.com", fn: "Sarah", ln: "Mitchell", role: "ADMIN", hash: adminHash, pts: 1200 },
      { email: "alex@company.com", fn: "Alex", ln: "Thompson", role: "LEARNER", hash: learnerHash, pts: 2450 },
      { email: "carol@company.com", fn: "Carol", ln: "Davis", role: "MANAGER", hash: mgrHash, pts: 1890 },
      { email: "eva@company.com", fn: "Eva", ln: "Martinez", role: "LEARNER", hash: learnerHash, pts: 3200 },
      { email: "bob@company.com", fn: "Bob", ln: "Smith", role: "LEARNER", hash: learnerHash, pts: 980 },
      { email: "henry@company.com", fn: "Henry", ln: "Brown", role: "LEARNER", hash: learnerHash, pts: 2100 },
    ],
    nursepath: [
      { email: "admin@nursepath.com", fn: "Dr. James", ln: "Park", role: "ADMIN", hash: adminHash, pts: 800 },
      { email: "maria@hospital.com", fn: "Maria", ln: "Santos", role: "LEARNER", hash: learnerHash, pts: 1540 },
      { email: "nurse.lee@hospital.com", fn: "Jennifer", ln: "Lee", role: "LEARNER", hash: learnerHash, pts: 2100 },
    ],
    campuslearn: [
      { email: "admin@campuslearn.com", fn: "Prof. Nina", ln: "Torres", role: "ADMIN", hash: adminHash, pts: 600 },
      { email: "jordan@university.edu", fn: "Jordan", ln: "Lee", role: "LEARNER", hash: learnerHash, pts: 1870 },
      { email: "student.kim@university.edu", fn: "Soo-Yun", ln: "Kim", role: "LEARNER", hash: learnerHash, pts: 2340 },
    ],
  };

  for (const org of orgs) {
    const users = usersData[org.slug] || [];
    for (const u of users) {
      run("INSERT INTO users (id, email, password_hash, first_name, last_name, role, org_id, points, streak, status) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [uid(), u.email, u.hash, u.fn, u.ln, u.role, org.id, u.pts, Math.floor(Math.random() * 14), "ACTIVE"]);
    }
  }

  // Courses
  const coursesData = {
    mindwell: [
      { title: "Managing Workplace Stress", cat: "Stress Management", desc: "Learn evidence-based techniques to manage and reduce workplace stress through mindfulness, cognitive reframing, and boundary setting.", diff: "BEGINNER", dur: "4 weeks", ce: 0, badge: "Stress Warrior", instr: "Dr. Sarah Chen", tags: "stress,mindfulness,coping", enrolled: 234, rating: 4.8 },
      { title: "Building Emotional Resilience", cat: "Resilience", desc: "Develop mental toughness and learn to bounce back from adversity with proven psychological frameworks.", diff: "INTERMEDIATE", dur: "3 weeks", ce: 0, badge: "Resilience Champion", instr: "Dr. Mark Rivera", tags: "resilience,growth", enrolled: 189, rating: 4.9 },
      { title: "Mindfulness at Work", cat: "Mindfulness", desc: "Practice daily mindfulness techniques to improve focus, reduce anxiety, and enhance overall wellbeing.", diff: "BEGINNER", dur: "2 weeks", ce: 0, badge: "Mindful Leader", instr: "Dr. Aisha Patel", tags: "mindfulness,meditation", enrolled: 312, rating: 4.7 },
      { title: "Healthy Communication Skills", cat: "Communication", desc: "Master assertive, empathetic communication in professional settings to build stronger relationships.", diff: "INTERMEDIATE", dur: "3 weeks", ce: 0, badge: "Communicator", instr: "Dr. James Liu", tags: "communication,empathy", enrolled: 156, rating: 4.6 },
      { title: "Work-Life Balance Mastery", cat: "Balance", desc: "Create sustainable boundaries between work and personal life for long-term health.", diff: "BEGINNER", dur: "2 weeks", ce: 0, badge: "Balance Keeper", instr: "Dr. Elena Moss", tags: "balance,wellness", enrolled: 278, rating: 4.8 },
      { title: "Team Wellbeing Workshop", cat: "Team Health", desc: "Foster psychological safety, trust, and team cohesion in your workplace.", diff: "BEGINNER", dur: "1 week", ce: 0, badge: "Team Builder", instr: "Dr. Tom Harris", tags: "team,culture", enrolled: 98, rating: 4.5 },
    ],
    nursepath: [
      { title: "Advanced Patient Assessment", cat: "Clinical Skills", desc: "Master advanced assessment techniques including head-to-toe evaluation for complex patients.", diff: "ADVANCED", dur: "6 weeks", ce: 12, badge: "Assessment Expert", instr: "Dr. Rachel Green", tags: "assessment,clinical,NP", enrolled: 145, rating: 4.9 },
      { title: "Pharmacology Updates 2025", cat: "Pharmacology", desc: "Stay current with the latest drug interactions, protocols, and prescribing guidelines.", diff: "INTERMEDIATE", dur: "4 weeks", ce: 8, badge: "Pharma Certified", instr: "Dr. Alan Brooks", tags: "pharmacology,drugs", enrolled: 203, rating: 4.7 },
      { title: "Telehealth Best Practices", cat: "Telehealth", desc: "Deliver effective, compliant, patient-centered care through virtual platforms.", diff: "BEGINNER", dur: "2 weeks", ce: 4, badge: "Telehealth Pro", instr: "Dr. Lisa Wang", tags: "telehealth,virtual", enrolled: 167, rating: 4.8 },
      { title: "Wound Care Certification", cat: "Wound Care", desc: "Comprehensive wound assessment, staging, treatment planning, and documentation.", diff: "ADVANCED", dur: "5 weeks", ce: 10, badge: "Wound Specialist", instr: "Dr. Kathy Nguyen", tags: "wound,certification", enrolled: 89, rating: 4.9 },
      { title: "Mental Health Screening", cat: "Mental Health", desc: "Identify and respond to mental health concerns in your patient population.", diff: "INTERMEDIATE", dur: "3 weeks", ce: 6, badge: "MH Screener", instr: "Dr. David Kim", tags: "mental health,PHQ-9", enrolled: 134, rating: 4.6 },
      { title: "Emergency Response Protocols", cat: "Emergency", desc: "Updated emergency protocols for rapid assessment and critical intervention.", diff: "ADVANCED", dur: "2 weeks", ce: 4, badge: "First Responder", instr: "Dr. Amy Foster", tags: "emergency,ACLS", enrolled: 256, rating: 4.8 },
    ],
    campuslearn: [
      { title: "Introduction to Data Science", cat: "Data Science", desc: "Foundational data science concepts including Python, statistics, and visualization.", diff: "BEGINNER", dur: "8 weeks", ce: 0, badge: "Data Explorer", instr: "Prof. Maria Santos", tags: "python,data,statistics", enrolled: 456, rating: 4.8 },
      { title: "Creative Writing Workshop", cat: "Arts & Humanities", desc: "Develop your unique voice through fiction, poetry, and personal essays.", diff: "BEGINNER", dur: "6 weeks", ce: 0, badge: "Wordsmith", instr: "Prof. John Blake", tags: "writing,creative", enrolled: 189, rating: 4.9 },
      { title: "Digital Marketing Fundamentals", cat: "Business", desc: "Master SEO, social media strategy, content marketing, and analytics.", diff: "BEGINNER", dur: "4 weeks", ce: 0, badge: "Marketing Maven", instr: "Prof. Kelly Tran", tags: "marketing,SEO", enrolled: 367, rating: 4.7 },
      { title: "Machine Learning Basics", cat: "AI & ML", desc: "Build your first ML models with scikit-learn and TensorFlow.", diff: "INTERMEDIATE", dur: "10 weeks", ce: 0, badge: "ML Pioneer", instr: "Prof. Raj Patel", tags: "ML,AI", enrolled: 278, rating: 4.6 },
      { title: "Public Speaking Mastery", cat: "Communication", desc: "Overcome fear and deliver compelling, memorable presentations.", diff: "BEGINNER", dur: "3 weeks", ce: 0, badge: "Orator", instr: "Prof. Nina Chen", tags: "speaking,presentation", enrolled: 234, rating: 4.8 },
      { title: "Financial Literacy 101", cat: "Finance", desc: "Essential money management, budgeting, investing, and financial planning.", diff: "BEGINNER", dur: "4 weeks", ce: 0, badge: "Finance Savvy", instr: "Prof. Alex Jordan", tags: "finance,budgeting", enrolled: 198, rating: 4.5 },
    ],
  };

  const lessonTypes = ["VIDEO", "READING", "EXERCISE", "QUIZ"];
  const lessonTitles = ["Introduction & Overview", "Core Concepts", "Practical Exercise", "Knowledge Check", "Deep Dive", "Case Study", "Hands-on Workshop", "Assessment"];

  for (const org of orgs) {
    const courses = coursesData[org.slug] || [];
    for (const c of courses) {
      const courseId = uid();
      const catSlug = c.cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const courseSlug = c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      // Category
      let catRow = getOne("SELECT id FROM categories WHERE slug=? AND org_id=?", [catSlug, org.id]);
      let catId;
      if (!catRow) {
        catId = uid();
        run("INSERT INTO categories (id, name, slug, org_id) VALUES (?,?,?,?)", [catId, c.cat, catSlug, org.id]);
      } else {
        catId = catRow.id;
      }

      run(`INSERT INTO courses (id, title, slug, description, difficulty, status, duration, tags, ce_credits, badge_name, instructor_name, org_id, category_id, enrolled_count, avg_rating, published_at)
           VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,datetime('now'))`,
        [courseId, c.title, courseSlug, c.desc, c.diff, "PUBLISHED", c.dur, c.tags, c.ce, c.badge, c.instr, org.id, catId, c.enrolled, c.rating]);

      // Create 2-3 modules with lessons
      const moduleCount = 2 + Math.floor(Math.random() * 2);
      const moduleNames = ["Foundations", "Core Skills", "Advanced Practice", "Mastery"];
      for (let m = 0; m < moduleCount; m++) {
        const modId = uid();
        run("INSERT INTO modules (id, title, \"order\", course_id) VALUES (?,?,?,?)",
          [modId, `Module ${m + 1}: ${moduleNames[m]}`, m, courseId]);

        for (let l = 0; l < lessonTitles.length; l++) {
          const lessonId = uid();
          const content = JSON.stringify({
            text: `This lesson covers important concepts related to ${c.title}. Practice the techniques discussed and apply them in your daily routine.`,
            questions: lessonTypes[l % 4] === "QUIZ" ? [
              { q: "What is the primary concept discussed?", opts: ["Focus", "Communication", "Resilience", "Balance"], ans: 0 },
              { q: "Which technique was recommended?", opts: ["Journaling", "Meditation", "Exercise", "All of the above"], ans: 3 },
            ] : null,
          });
          run(`INSERT INTO lessons (id, title, type, "order", duration, content, module_id) VALUES (?,?,?,?,?,?,?)`,
            [lessonId, lessonTitles[l], lessonTypes[l % 4], l, 8 + Math.floor(Math.random() * 22), content, modId]);
        }
      }
    }
  }

  // Experts
  const expertsData = {
    mindwell: [
      { name: "Dr. Sarah Chen", role: "Licensed Psychologist", spec: "Stress & Anxiety", bio: "15+ years in workplace mental health", avatar: "SC", rating: 4.9, sessions: 342, slot: "Tomorrow, 2:00 PM", rate: "Included" },
      { name: "Mark Rivera, LCSW", role: "Clinical Social Worker", spec: "Resilience", bio: "Burnout recovery specialist", avatar: "MR", rating: 4.8, sessions: 256, slot: "Wed, 10:00 AM", rate: "Included" },
      { name: "Aisha Patel, PhD", role: "Mindfulness Coach", spec: "Mindfulness", bio: "Certified MBSR instructor", avatar: "AP", rating: 4.9, sessions: 198, slot: null, rate: "Included" },
      { name: "James Liu, PsyD", role: "Communication Coach", spec: "Communication", bio: "Executive communication expert", avatar: "JL", rating: 4.7, sessions: 167, slot: "Thu, 3:30 PM", rate: "Included" },
    ],
    nursepath: [
      { name: "Dr. Rachel Green", role: "Clinical Educator", spec: "Assessment", bio: "20 years in clinical education", avatar: "RG", rating: 4.9, sessions: 289, slot: "Tomorrow, 11 AM", rate: "$75/hr" },
      { name: "Dr. Alan Brooks", role: "Pharmacist", spec: "Pharmacology", bio: "Board-certified pharmacologist", avatar: "AB", rating: 4.8, sessions: 198, slot: null, rate: "$85/hr" },
      { name: "Dr. Lisa Wang", role: "Telehealth Specialist", spec: "Virtual Care", bio: "Telehealth education pioneer", avatar: "LW", rating: 4.7, sessions: 156, slot: "Wed, 1 PM", rate: "$65/hr" },
      { name: "Dr. Kathy Nguyen", role: "Wound Care Expert", spec: "Wound Management", bio: "National wound care consultant", avatar: "KN", rating: 4.9, sessions: 234, slot: "Fri, 9 AM", rate: "$90/hr" },
    ],
    campuslearn: [
      { name: "Prof. Maria Santos", role: "Data Science Mentor", spec: "Python & Analytics", bio: "Former data scientist at Google", avatar: "MS", rating: 4.9, sessions: 412, slot: "Tomorrow, 4 PM", rate: "Free" },
      { name: "Prof. John Blake", role: "Writing Coach", spec: "Creative Writing", bio: "Published author, MFA Iowa", avatar: "JB", rating: 4.8, sessions: 234, slot: "Wed, 2 PM", rate: "Free" },
      { name: "Prof. Kelly Tran", role: "Career Advisor", spec: "Marketing", bio: "Former CMO turned educator", avatar: "KT", rating: 4.7, sessions: 189, slot: null, rate: "Free" },
      { name: "Prof. Raj Patel", role: "AI Tutor", spec: "Machine Learning", bio: "PhD ML from Stanford", avatar: "RP", rating: 4.9, sessions: 345, slot: "Thu, 11 AM", rate: "Free" },
    ],
  };

  for (const org of orgs) {
    const experts = expertsData[org.slug] || [];
    for (const e of experts) {
      run(`INSERT INTO experts (id, name, role, specialty, bio, avatar, rating, sessions_count, available, next_slot, rate, org_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
        [uid(), e.name, e.role, e.spec, e.bio, e.avatar, e.rating, e.sessions, e.slot ? 1 : 0, e.slot, e.rate, org.id]);
    }
  }

  // Create enrollments for demo learners
  for (const org of orgs) {
    const learners = getAll("SELECT id FROM users WHERE org_id=? AND role='LEARNER'", [org.id]);
    const courses = getAll("SELECT id FROM courses WHERE org_id=?", [org.id]);

    for (const learner of learners) {
      const enrollCount = 2 + Math.floor(Math.random() * 3);
      const shuffled = [...courses].sort(() => Math.random() - 0.5);
      for (let i = 0; i < Math.min(enrollCount, shuffled.length); i++) {
        const progress = Math.random() > 0.3 ? Math.floor(Math.random() * 100) : 0;
        const completed = progress === 100;
        run(`INSERT OR IGNORE INTO enrollments (id, user_id, course_id, status, progress, completed_at) VALUES (?,?,?,?,?,?)`,
          [uid(), learner.id, shuffled[i].id, completed ? "COMPLETED" : "ACTIVE", progress, completed ? new Date().toISOString() : null]);

        // If completed, create certificate
        if (completed) {
          const course = getOne("SELECT * FROM courses WHERE id=?", [shuffled[i].id]);
          run("INSERT OR IGNORE INTO certificates (id, credential_id, user_id, course_id, org_id, ce_credits) VALUES (?,?,?,?,?,?)",
            [uid(), "CRT-" + uid(), learner.id, shuffled[i].id, org.id, course?.ce_credits || 0]);
        }
      }
    }
  }

  saveDb();
  console.log("✅ Database seeded successfully!");
}

// ═══════════════════════════════════════════════════════════════
// MIDDLEWARE
// ═══════════════════════════════════════════════════════════════

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Auth middleware
function authMiddleware(req, res, next) {
  const token = req.cookies?.token || req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

function adminMiddleware(req, res, next) {
  if (req.user.role !== "ADMIN" && req.user.role !== "SUPER_ADMIN" && req.user.role !== "MANAGER") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
}

// ═══════════════════════════════════════════════════════════════
// AUTH ROUTES
// ═══════════════════════════════════════════════════════════════

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password, orgSlug } = req.body;
    if (!email || !password || !orgSlug) return res.status(400).json({ error: "Missing fields" });

    const org = getOne("SELECT * FROM organizations WHERE slug=?", [orgSlug]);
    if (!org) return res.status(404).json({ error: "Organization not found" });

    const user = getOne("SELECT * FROM users WHERE email=? AND org_id=?", [email, org.id]);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    if (user.status === "SUSPENDED") return res.status(403).json({ error: "Account suspended" });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    // Update last active
    run("UPDATE users SET last_active_at=datetime('now') WHERE id=?", [user.id]);

    const token = jwt.sign({
      id: user.id, email: user.email, role: user.role,
      orgId: org.id, orgSlug: org.slug, orgName: org.name,
      firstName: user.first_name, lastName: user.last_name, avatar: user.avatar,
    }, JWT_SECRET, { expiresIn: "30d" });

    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 30 * 24 * 60 * 60 * 1000 });
    res.json({
      token, user: {
        id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name,
        role: user.role, avatar: user.avatar || (user.first_name[0] + user.last_name[0]),
        points: user.points, streak: user.streak,
      },
      org: { id: org.id, name: org.name, slug: org.slug, industry: org.industry, themeConfig: JSON.parse(org.theme_config || "{}") },
    });
  } catch (e) {
    console.error("Login error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ ok: true });
});

app.get("/api/auth/me", authMiddleware, (req, res) => {
  const user = getOne("SELECT * FROM users WHERE id=?", [req.user.id]);
  const org = getOne("SELECT * FROM organizations WHERE id=?", [req.user.orgId]);
  if (!user || !org) return res.status(404).json({ error: "Not found" });

  res.json({
    user: {
      id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name,
      role: user.role, avatar: user.avatar || (user.first_name[0] + user.last_name[0]),
      points: user.points, streak: user.streak, bio: user.bio, jobTitle: user.job_title,
    },
    org: { id: org.id, name: org.name, slug: org.slug, industry: org.industry, themeConfig: JSON.parse(org.theme_config || "{}") },
  });
});

// ═══════════════════════════════════════════════════════════════
// COURSE ROUTES
// ═══════════════════════════════════════════════════════════════

app.get("/api/courses", authMiddleware, (req, res) => {
  const { search, status, category } = req.query;
  let sql = `SELECT c.*, cat.name as category_name, cat.slug as category_slug,
    (SELECT COUNT(*) FROM modules m WHERE m.course_id = c.id) as module_count,
    (SELECT COUNT(*) FROM lessons l JOIN modules m ON l.module_id = m.id WHERE m.course_id = c.id) as lesson_count
    FROM courses c LEFT JOIN categories cat ON c.category_id = cat.id WHERE c.org_id = ?`;
  const params = [req.user.orgId];

  if (req.user.role === "LEARNER") { sql += " AND c.status = 'PUBLISHED'"; }
  if (search) { sql += " AND (c.title LIKE ? OR c.description LIKE ?)"; params.push(`%${search}%`, `%${search}%`); }
  if (category) { sql += " AND cat.slug = ?"; params.push(category); }
  sql += " ORDER BY c.created_at DESC";

  const courses = getAll(sql, params);

  // Get user enrollment for each course
  const enriched = courses.map(c => {
    const enrollment = getOne("SELECT * FROM enrollments WHERE user_id=? AND course_id=?", [req.user.id, c.id]);
    return { ...c, tags: c.tags ? c.tags.split(",") : [], userProgress: enrollment?.progress || 0, userEnrolled: !!enrollment, enrollmentStatus: enrollment?.status || null };
  });

  res.json(enriched);
});

app.get("/api/courses/:id", authMiddleware, (req, res) => {
  const course = getOne("SELECT c.*, cat.name as category_name FROM courses c LEFT JOIN categories cat ON c.category_id=cat.id WHERE c.id=? AND c.org_id=?", [req.params.id, req.user.orgId]);
  if (!course) return res.status(404).json({ error: "Course not found" });

  const modules = getAll("SELECT * FROM modules WHERE course_id=? ORDER BY \"order\"", [course.id]);
  for (const mod of modules) {
    mod.lessons = getAll("SELECT * FROM lessons WHERE module_id=? ORDER BY \"order\"", [mod.id]);
    for (const lesson of mod.lessons) {
      const progress = getOne("SELECT * FROM lesson_progress WHERE user_id=? AND lesson_id=?", [req.user.id, lesson.id]);
      lesson.completed = progress?.completed === 1;
      lesson.score = progress?.score;
      lesson.content = JSON.parse(lesson.content || "{}");
    }
  }

  const enrollment = getOne("SELECT * FROM enrollments WHERE user_id=? AND course_id=?", [req.user.id, course.id]);

  res.json({ ...course, tags: course.tags ? course.tags.split(",") : [], modules, userProgress: enrollment?.progress || 0, userEnrolled: !!enrollment });
});

app.post("/api/courses/:id/enroll", authMiddleware, (req, res) => {
  const course = getOne("SELECT * FROM courses WHERE id=? AND org_id=?", [req.params.id, req.user.orgId]);
  if (!course) return res.status(404).json({ error: "Not found" });

  const existing = getOne("SELECT * FROM enrollments WHERE user_id=? AND course_id=?", [req.user.id, course.id]);
  if (existing) return res.json({ message: "Already enrolled", enrollment: existing });

  run("INSERT INTO enrollments (id, user_id, course_id) VALUES (?,?,?)", [uid(), req.user.id, course.id]);
  run("UPDATE courses SET enrolled_count = enrolled_count + 1 WHERE id=?", [course.id]);

  res.status(201).json({ message: "Enrolled successfully" });
});

app.post("/api/lessons/:id/complete", authMiddleware, (req, res) => {
  const { score } = req.body;
  const lesson = getOne(`SELECT l.*, m.course_id FROM lessons l JOIN modules m ON l.module_id=m.id WHERE l.id=?`, [req.params.id]);
  if (!lesson) return res.status(404).json({ error: "Lesson not found" });

  // Upsert lesson progress
  const existing = getOne("SELECT * FROM lesson_progress WHERE user_id=? AND lesson_id=?", [req.user.id, lesson.id]);
  if (existing) {
    run("UPDATE lesson_progress SET completed=1, score=?, completed_at=datetime('now') WHERE id=?", [score || null, existing.id]);
  } else {
    run("INSERT INTO lesson_progress (id, user_id, lesson_id, completed, score, completed_at) VALUES (?,?,?,1,?,datetime('now'))", [uid(), req.user.id, lesson.id, score || null]);
  }

  // Recalculate course progress
  const totalLessons = getOne(`SELECT COUNT(*) as c FROM lessons l JOIN modules m ON l.module_id=m.id WHERE m.course_id=?`, [lesson.course_id]);
  const completedLessons = getOne(`SELECT COUNT(*) as c FROM lesson_progress lp JOIN lessons l ON lp.lesson_id=l.id JOIN modules m ON l.module_id=m.id WHERE m.course_id=? AND lp.user_id=? AND lp.completed=1`, [lesson.course_id, req.user.id]);

  const progress = totalLessons.c > 0 ? Math.round((completedLessons.c / totalLessons.c) * 100) : 0;

  // Update enrollment
  const enrollment = getOne("SELECT * FROM enrollments WHERE user_id=? AND course_id=?", [req.user.id, lesson.course_id]);
  if (enrollment) {
    const completed = progress >= 100;
    run("UPDATE enrollments SET progress=?, status=?, completed_at=? WHERE id=?",
      [progress, completed ? "COMPLETED" : "ACTIVE", completed ? new Date().toISOString() : null, enrollment.id]);

    // Award points
    run("UPDATE users SET points = points + 10 WHERE id=?", [req.user.id]);

    // Create certificate if completed
    if (completed) {
      const existingCert = getOne("SELECT * FROM certificates WHERE user_id=? AND course_id=?", [req.user.id, lesson.course_id]);
      if (!existingCert) {
        const course = getOne("SELECT * FROM courses WHERE id=?", [lesson.course_id]);
        run("INSERT INTO certificates (id, credential_id, user_id, course_id, org_id, ce_credits) VALUES (?,?,?,?,?,?)",
          [uid(), "CRT-" + uid(), req.user.id, lesson.course_id, req.user.orgId, course?.ce_credits || 0]);
        run("UPDATE users SET points = points + 100 WHERE id=?", [req.user.id]);
      }
    }
  }

  res.json({ progress, completed: progress >= 100 });
});

// Admin: Create course
app.post("/api/courses", authMiddleware, adminMiddleware, (req, res) => {
  const { title, description, categoryName, difficulty, duration, ceCredits, badgeName, instructorName, tags } = req.body;
  if (!title) return res.status(400).json({ error: "Title required" });

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let catId = null;
  if (categoryName) {
    const catSlug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    let cat = getOne("SELECT id FROM categories WHERE slug=? AND org_id=?", [catSlug, req.user.orgId]);
    if (!cat) {
      catId = uid();
      run("INSERT INTO categories (id, name, slug, org_id) VALUES (?,?,?,?)", [catId, categoryName, catSlug, req.user.orgId]);
    } else {
      catId = cat.id;
    }
  }

  const courseId = uid();
  run(`INSERT INTO courses (id, title, slug, description, difficulty, status, duration, ce_credits, badge_name, instructor_name, tags, org_id, category_id, published_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,datetime('now'))`,
    [courseId, title, slug, description || "", difficulty || "BEGINNER", "PUBLISHED", duration || "", ceCredits || 0, badgeName || "", instructorName || "", (tags || []).join(","), req.user.orgId, catId]);

  res.status(201).json({ id: courseId, message: "Course created" });
});

// ═══════════════════════════════════════════════════════════════
// USER ROUTES
// ═══════════════════════════════════════════════════════════════

app.get("/api/users", authMiddleware, adminMiddleware, (req, res) => {
  const { search, role, status } = req.query;
  let sql = "SELECT id, email, first_name, last_name, avatar, role, status, points, streak, last_active_at, created_at FROM users WHERE org_id=?";
  const params = [req.user.orgId];
  if (search) { sql += " AND (first_name LIKE ? OR last_name LIKE ? OR email LIKE ?)"; params.push(`%${search}%`, `%${search}%`, `%${search}%`); }
  if (role) { sql += " AND role=?"; params.push(role); }
  if (status) { sql += " AND status=?"; params.push(status); }
  sql += " ORDER BY created_at DESC";

  const users = getAll(sql, params);
  const enriched = users.map(u => {
    const enrollments = getOne("SELECT COUNT(*) as c FROM enrollments WHERE user_id=?", [u.id]);
    const completed = getOne("SELECT COUNT(*) as c FROM enrollments WHERE user_id=? AND status='COMPLETED'", [u.id]);
    return { ...u, enrolledCount: enrollments?.c || 0, completedCount: completed?.c || 0 };
  });
  res.json(enriched);
});

app.post("/api/users/invite", authMiddleware, adminMiddleware, async (req, res) => {
  const { emails, role, autoEnrollCourseIds } = req.body;
  if (!emails || !Array.isArray(emails)) return res.status(400).json({ error: "Emails required" });

  const results = [];
  for (const email of emails) {
    const existing = getOne("SELECT id FROM users WHERE email=? AND org_id=?", [email, req.user.orgId]);
    if (existing) { results.push({ email, status: "already_exists" }); continue; }

    const token = uid();
    run("INSERT INTO invitations (id, email, role, token, org_id, expires_at) VALUES (?,?,?,?,?,datetime('now', '+7 days'))",
      [uid(), email, role || "LEARNER", token, req.user.orgId]);
    results.push({ email, status: "invited", token });
  }
  res.status(201).json({ results });
});

app.put("/api/users/:id", authMiddleware, adminMiddleware, (req, res) => {
  const { role, status, firstName, lastName } = req.body;
  const user = getOne("SELECT * FROM users WHERE id=? AND org_id=?", [req.params.id, req.user.orgId]);
  if (!user) return res.status(404).json({ error: "User not found" });

  if (role) run("UPDATE users SET role=? WHERE id=?", [role, user.id]);
  if (status) run("UPDATE users SET status=? WHERE id=?", [status, user.id]);
  if (firstName) run("UPDATE users SET first_name=? WHERE id=?", [firstName, user.id]);
  if (lastName) run("UPDATE users SET last_name=? WHERE id=?", [lastName, user.id]);

  res.json({ message: "User updated" });
});

// ═══════════════════════════════════════════════════════════════
// EXPERT & SESSION ROUTES
// ═══════════════════════════════════════════════════════════════

app.get("/api/experts", authMiddleware, (req, res) => {
  const experts = getAll("SELECT * FROM experts WHERE org_id=?", [req.user.orgId]);
  res.json(experts);
});

app.post("/api/sessions", authMiddleware, (req, res) => {
  const { expertId, scheduledAt, notes } = req.body;
  const expert = getOne("SELECT * FROM experts WHERE id=? AND org_id=?", [expertId, req.user.orgId]);
  if (!expert) return res.status(404).json({ error: "Expert not found" });

  const sessionId = uid();
  run("INSERT INTO sessions (id, user_id, expert_id, scheduled_at, notes) VALUES (?,?,?,?,?)",
    [sessionId, req.user.id, expertId, scheduledAt, notes || ""]);
  run("UPDATE experts SET sessions_count = sessions_count + 1 WHERE id=?", [expertId]);

  res.status(201).json({ id: sessionId, message: "Session booked" });
});

app.get("/api/sessions", authMiddleware, (req, res) => {
  const sessions = getAll(`SELECT s.*, e.name as expert_name, e.avatar as expert_avatar, e.specialty as expert_specialty
    FROM sessions s JOIN experts e ON s.expert_id=e.id WHERE s.user_id=? ORDER BY s.scheduled_at DESC`, [req.user.id]);
  res.json(sessions);
});

// ═══════════════════════════════════════════════════════════════
// ACHIEVEMENT ROUTES
// ═══════════════════════════════════════════════════════════════

app.get("/api/achievements", authMiddleware, (req, res) => {
  const user = getOne("SELECT * FROM users WHERE id=?", [req.user.id]);
  const certs = getAll(`SELECT cert.*, c.title as course_title, c.badge_name, c.badge_icon, c.ce_credits
    FROM certificates cert JOIN courses c ON cert.course_id=c.id WHERE cert.user_id=?`, [req.user.id]);
  const allBadges = getAll(`SELECT c.id, c.badge_name, c.badge_icon, c.title,
    CASE WHEN cert.id IS NOT NULL THEN 1 ELSE 0 END as earned
    FROM courses c LEFT JOIN certificates cert ON c.id=cert.course_id AND cert.user_id=?
    WHERE c.org_id=? AND c.status='PUBLISHED'`, [req.user.id, req.user.orgId]);

  // Leaderboard
  const leaderboard = getAll("SELECT id, first_name, last_name, avatar, points FROM users WHERE org_id=? AND role='LEARNER' ORDER BY points DESC LIMIT 10", [req.user.orgId]);

  res.json({
    points: user?.points || 0,
    streak: user?.streak || 0,
    rank: leaderboard.findIndex(l => l.id === req.user.id) + 1 || 0,
    certificates: certs,
    badges: allBadges,
    leaderboard,
  });
});

// ═══════════════════════════════════════════════════════════════
// ANALYTICS ROUTES (Admin)
// ═══════════════════════════════════════════════════════════════

app.get("/api/analytics", authMiddleware, adminMiddleware, (req, res) => {
  const orgId = req.user.orgId;
  const totalUsers = getOne("SELECT COUNT(*) as c FROM users WHERE org_id=?", [orgId])?.c || 0;
  const activeUsers = getOne("SELECT COUNT(*) as c FROM users WHERE org_id=? AND status='ACTIVE'", [orgId])?.c || 0;
  const totalEnrollments = getOne("SELECT COUNT(*) as c FROM enrollments e JOIN courses c ON e.course_id=c.id WHERE c.org_id=?", [orgId])?.c || 0;
  const completions = getOne("SELECT COUNT(*) as c FROM enrollments e JOIN courses c ON e.course_id=c.id WHERE c.org_id=? AND e.status='COMPLETED'", [orgId])?.c || 0;
  const totalCourses = getOne("SELECT COUNT(*) as c FROM courses WHERE org_id=? AND status='PUBLISHED'", [orgId])?.c || 0;

  const courseStats = getAll(`SELECT c.id, c.title, c.enrolled_count, c.avg_rating,
    (SELECT COUNT(*) FROM enrollments e WHERE e.course_id=c.id AND e.status='COMPLETED') as completions
    FROM courses c WHERE c.org_id=? AND c.status='PUBLISHED' ORDER BY c.enrolled_count DESC`, [orgId]);

  const topPerformers = getAll(`SELECT u.id, u.first_name, u.last_name, u.avatar, u.points,
    (SELECT COUNT(*) FROM certificates cert WHERE cert.user_id=u.id) as cert_count
    FROM users u WHERE u.org_id=? ORDER BY u.points DESC LIMIT 5`, [orgId]);

  res.json({
    overview: { totalUsers, activeUsers, totalEnrollments, completions, totalCourses, completionRate: totalEnrollments > 0 ? Math.round((completions / totalEnrollments) * 100) : 0 },
    courseStats,
    topPerformers,
  });
});

// ═══════════════════════════════════════════════════════════════
// SETTINGS ROUTES
// ═══════════════════════════════════════════════════════════════

app.put("/api/settings/profile", authMiddleware, async (req, res) => {
  const { firstName, lastName, bio, jobTitle } = req.body;
  run("UPDATE users SET first_name=?, last_name=?, bio=?, job_title=? WHERE id=?",
    [firstName || req.user.firstName, lastName || req.user.lastName, bio || "", jobTitle || "", req.user.id]);
  res.json({ message: "Profile updated" });
});

app.put("/api/settings/password", authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) return res.status(400).json({ error: "Both passwords required" });

  const user = getOne("SELECT * FROM users WHERE id=?", [req.user.id]);
  const valid = await bcrypt.compare(currentPassword, user.password_hash);
  if (!valid) return res.status(401).json({ error: "Current password incorrect" });

  const hash = await bcrypt.hash(newPassword, 10);
  run("UPDATE users SET password_hash=? WHERE id=?", [hash, req.user.id]);
  res.json({ message: "Password updated" });
});

// ═══════════════════════════════════════════════════════════════
// ORGANIZATIONS (for login page)
// ═══════════════════════════════════════════════════════════════

app.get("/api/organizations", (req, res) => {
  const orgs = getAll("SELECT id, name, slug, industry, theme_config FROM organizations ORDER BY name");
  res.json(orgs.map(o => ({ ...o, themeConfig: JSON.parse(o.theme_config || "{}") })));
});

// ═══════════════════════════════════════════════════════════════
// CATCH-ALL: Serve React app
// ═══════════════════════════════════════════════════════════════

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ═══════════════════════════════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════════════════════════════

async function start() {
  await initDatabase();
  await seedDatabase();
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n🚀 LMS Platform running at http://localhost:${PORT}`);
    console.log(`\n📋 Demo accounts:`);
    console.log(`   Admin:   admin@mindwell.com / admin123     (Wellness)`);
    console.log(`   Admin:   admin@nursepath.com / admin123    (Healthcare)`);
    console.log(`   Admin:   admin@campuslearn.com / admin123  (Education)`);
    console.log(`   Learner: alex@company.com / learn123`);
    console.log(`   Learner: maria@hospital.com / learn123`);
    console.log(`   Learner: jordan@university.edu / learn123\n`);
  });
}

start().catch(console.error);
