// React hooks accessed via React.*

const AuthContext = React.createContext(null);
const DEMO_ACCOUNTS = [{
  id: "admin-1",
  email: "admin@mindwell.com",
  password: "admin123",
  firstName: "Sarah",
  lastName: "Mitchell",
  role: "admin",
  avatar: "SM",
  org: "wellness"
}, {
  id: "admin-2",
  email: "admin@nursepath.com",
  password: "admin123",
  firstName: "Dr. James",
  lastName: "Park",
  role: "admin",
  avatar: "JP",
  org: "healthcare"
}, {
  id: "admin-3",
  email: "admin@campuslearn.com",
  password: "admin123",
  firstName: "Prof. Nina",
  lastName: "Torres",
  role: "admin",
  avatar: "NT",
  org: "education"
}, {
  id: "learner-1",
  email: "alex@company.com",
  password: "learn123",
  firstName: "Alex",
  lastName: "Thompson",
  role: "learner",
  avatar: "AT",
  org: "wellness"
}, {
  id: "learner-2",
  email: "maria@hospital.com",
  password: "learn123",
  firstName: "Maria",
  lastName: "Santos",
  role: "learner",
  avatar: "MS",
  org: "healthcare"
}, {
  id: "learner-3",
  email: "jordan@university.edu",
  password: "learn123",
  firstName: "Jordan",
  lastName: "Lee",
  role: "learner",
  avatar: "JL",
  org: "education"
}, {
  id: "manager-1",
  email: "carol@company.com",
  password: "mgr123",
  firstName: "Carol",
  lastName: "Davis",
  role: "manager",
  avatar: "CD",
  org: "wellness"
}];
const THEMES = {
  wellness: {
    name: "MindWell",
    tagline: "Mental & Emotional Wellness for Your Team",
    primary: "#2D6A4F",
    primaryLight: "#40916C",
    primaryDark: "#1B4332",
    accent: "#D4A373",
    accentLight: "#E9C46A",
    bg: "#F7F5F0",
    bgCard: "#FFFFFF",
    bgSidebar: "#1B4332",
    sidebarText: "#D8F3DC",
    text: "#1B4332",
    textMuted: "#52796F",
    textLight: "#95B8A7",
    success: "#40916C",
    warning: "#E76F51",
    danger: "#D62828",
    gradient: "linear-gradient(135deg, #2D6A4F 0%, #40916C 50%, #52B788 100%)",
    heroGradient: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #40916C 100%)",
    loginBg: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #52B788 100%)",
    font: "'DM Sans', sans-serif",
    fontDisplay: "'Fraunces', serif",
    icon: "\u{1F9D8}",
    industry: "Corporate Wellness",
    loginImage: "\u{1F33F}",
    loginSubtext: "Empowering your team's mental and emotional wellbeing"
  },
  healthcare: {
    name: "NursePath",
    tagline: "Continuing Education for Healthcare Professionals",
    primary: "#0077B6",
    primaryLight: "#00B4D8",
    primaryDark: "#023E8A",
    accent: "#F72585",
    accentLight: "#FF758F",
    bg: "#F0F4F8",
    bgCard: "#FFFFFF",
    bgSidebar: "#023E8A",
    sidebarText: "#CAF0F8",
    text: "#023047",
    textMuted: "#457B9D",
    textLight: "#8EAFC0",
    success: "#06D6A0",
    warning: "#EF476F",
    danger: "#D62828",
    gradient: "linear-gradient(135deg, #023E8A 0%, #0077B6 50%, #00B4D8 100%)",
    heroGradient: "linear-gradient(135deg, #023047 0%, #023E8A 60%, #0077B6 100%)",
    loginBg: "linear-gradient(135deg, #023047 0%, #023E8A 40%, #0096C7 100%)",
    font: "'IBM Plex Sans', sans-serif",
    fontDisplay: "'Playfair Display', serif",
    icon: "\u{1F3E5}",
    industry: "Healthcare",
    loginImage: "\u{2695}\u{FE0F}",
    loginSubtext: "Advance your clinical expertise with accredited courses"
  },
  education: {
    name: "CampusLearn",
    tagline: "Your Digital Learning Companion",
    primary: "#7209B7",
    primaryLight: "#9D4EDD",
    primaryDark: "#560BAD",
    accent: "#F72585",
    accentLight: "#FF85A1",
    bg: "#FAF5FF",
    bgCard: "#FFFFFF",
    bgSidebar: "#3A0CA3",
    sidebarText: "#E0C3FC",
    text: "#240046",
    textMuted: "#7B5EA7",
    textLight: "#B088D4",
    success: "#06D6A0",
    warning: "#FFBE0B",
    danger: "#D62828",
    gradient: "linear-gradient(135deg, #3A0CA3 0%, #7209B7 50%, #9D4EDD 100%)",
    heroGradient: "linear-gradient(135deg, #240046 0%, #3A0CA3 60%, #7209B7 100%)",
    loginBg: "linear-gradient(135deg, #240046 0%, #3A0CA3 40%, #7209B7 100%)",
    font: "'Nunito Sans', sans-serif",
    fontDisplay: "'Space Grotesk', sans-serif",
    icon: "\u{1F393}",
    industry: "Higher Education",
    loginImage: "\u{1F4DA}",
    loginSubtext: "Unlock your potential with world-class courses"
  }
};
const COURSES = {
  wellness: [{
    id: "w1",
    title: "Managing Workplace Stress",
    cat: "Stress Management",
    dur: "4 weeks",
    lc: 12,
    enrolled: 234,
    rating: 4.8,
    progress: 65,
    img: "\u{1F9E0}",
    badge: "Stress Warrior",
    instr: "Dr. Sarah Chen",
    desc: "Learn evidence-based techniques to manage and reduce workplace stress.",
    tags: ["stress", "mindfulness"],
    ce: 4
  }, {
    id: "w2",
    title: "Building Emotional Resilience",
    cat: "Resilience",
    dur: "3 weeks",
    lc: 9,
    enrolled: 189,
    rating: 4.9,
    progress: 30,
    img: "\u{1F4AA}",
    badge: "Resilience Champion",
    instr: "Dr. Mark Rivera",
    desc: "Develop mental toughness and bounce back from adversity.",
    tags: ["resilience", "growth"],
    ce: 3
  }, {
    id: "w3",
    title: "Mindfulness at Work",
    cat: "Mindfulness",
    dur: "2 weeks",
    lc: 8,
    enrolled: 312,
    rating: 4.7,
    progress: 100,
    img: "\u{1F9D8}",
    badge: "Mindful Leader",
    instr: "Dr. Aisha Patel",
    desc: "Practice daily mindfulness to improve focus and reduce anxiety.",
    tags: ["mindfulness", "meditation"],
    ce: 2
  }, {
    id: "w4",
    title: "Healthy Communication",
    cat: "Communication",
    dur: "3 weeks",
    lc: 10,
    enrolled: 156,
    rating: 4.6,
    progress: 0,
    img: "\u{1F4AC}",
    badge: "Communicator",
    instr: "Dr. James Liu",
    desc: "Master empathetic communication in professional settings.",
    tags: ["communication", "empathy"],
    ce: 3
  }, {
    id: "w5",
    title: "Work-Life Balance Mastery",
    cat: "Balance",
    dur: "2 weeks",
    lc: 6,
    enrolled: 278,
    rating: 4.8,
    progress: 45,
    img: "\u{2696}\u{FE0F}",
    badge: "Balance Keeper",
    instr: "Dr. Elena Moss",
    desc: "Create sustainable boundaries for long-term wellbeing.",
    tags: ["balance", "wellness"],
    ce: 2
  }, {
    id: "w6",
    title: "Team Wellbeing Workshop",
    cat: "Team Health",
    dur: "1 week",
    lc: 4,
    enrolled: 98,
    rating: 4.5,
    progress: 0,
    img: "\u{1F91D}",
    badge: "Team Builder",
    instr: "Dr. Tom Harris",
    desc: "Foster psychological safety and team cohesion.",
    tags: ["team", "culture"],
    ce: 1
  }],
  healthcare: [{
    id: "h1",
    title: "Advanced Patient Assessment",
    cat: "Clinical Skills",
    dur: "6 weeks",
    lc: 18,
    enrolled: 145,
    rating: 4.9,
    progress: 80,
    img: "\u{1FA7A}",
    badge: "Assessment Expert",
    instr: "Dr. Rachel Green",
    desc: "Master advanced assessment for complex patients.",
    tags: ["assessment", "NP"],
    ce: 12
  }, {
    id: "h2",
    title: "Pharmacology Updates 2025",
    cat: "Pharmacology",
    dur: "4 weeks",
    lc: 14,
    enrolled: 203,
    rating: 4.7,
    progress: 50,
    img: "\u{1F48A}",
    badge: "Pharma Certified",
    instr: "Dr. Alan Brooks",
    desc: "Latest drug interactions and prescribing guidelines.",
    tags: ["pharma", "drugs"],
    ce: 8
  }, {
    id: "h3",
    title: "Telehealth Best Practices",
    cat: "Telehealth",
    dur: "2 weeks",
    lc: 8,
    enrolled: 167,
    rating: 4.8,
    progress: 100,
    img: "\u{1F4F1}",
    badge: "Telehealth Pro",
    instr: "Dr. Lisa Wang",
    desc: "Deliver effective care through virtual platforms.",
    tags: ["telehealth", "virtual"],
    ce: 4
  }, {
    id: "h4",
    title: "Wound Care Certification",
    cat: "Wound Care",
    dur: "5 weeks",
    lc: 15,
    enrolled: 89,
    rating: 4.9,
    progress: 20,
    img: "\u{1FA79}",
    badge: "Wound Specialist",
    instr: "Dr. Kathy Nguyen",
    desc: "Comprehensive wound assessment and treatment.",
    tags: ["wound", "certification"],
    ce: 10
  }, {
    id: "h5",
    title: "Mental Health Screening",
    cat: "Mental Health",
    dur: "3 weeks",
    lc: 10,
    enrolled: 134,
    rating: 4.6,
    progress: 0,
    img: "\u{1F9E0}",
    badge: "MH Screener",
    instr: "Dr. David Kim",
    desc: "Identify and respond to mental health concerns.",
    tags: ["mental health", "PHQ-9"],
    ce: 6
  }, {
    id: "h6",
    title: "Emergency Response Protocols",
    cat: "Emergency",
    dur: "2 weeks",
    lc: 6,
    enrolled: 256,
    rating: 4.8,
    progress: 10,
    img: "\u{1F691}",
    badge: "First Responder",
    instr: "Dr. Amy Foster",
    desc: "Updated emergency and critical intervention protocols.",
    tags: ["emergency", "ACLS"],
    ce: 4
  }],
  education: [{
    id: "e1",
    title: "Introduction to Data Science",
    cat: "Data Science",
    dur: "8 weeks",
    lc: 24,
    enrolled: 456,
    rating: 4.8,
    progress: 40,
    img: "\u{1F4CA}",
    badge: "Data Explorer",
    instr: "Prof. Maria Santos",
    desc: "Foundational data science with Python and statistics.",
    tags: ["python", "data"],
    ce: 0
  }, {
    id: "e2",
    title: "Creative Writing Workshop",
    cat: "Arts",
    dur: "6 weeks",
    lc: 18,
    enrolled: 189,
    rating: 4.9,
    progress: 75,
    img: "\u{270D}\u{FE0F}",
    badge: "Wordsmith",
    instr: "Prof. John Blake",
    desc: "Develop your voice through fiction and essays.",
    tags: ["writing", "creative"],
    ce: 0
  }, {
    id: "e3",
    title: "Digital Marketing",
    cat: "Business",
    dur: "4 weeks",
    lc: 12,
    enrolled: 367,
    rating: 4.7,
    progress: 100,
    img: "\u{1F4C8}",
    badge: "Marketing Maven",
    instr: "Prof. Kelly Tran",
    desc: "Master SEO, social media, and content marketing.",
    tags: ["marketing", "SEO"],
    ce: 0
  }, {
    id: "e4",
    title: "Machine Learning Basics",
    cat: "AI & ML",
    dur: "10 weeks",
    lc: 30,
    enrolled: 278,
    rating: 4.6,
    progress: 15,
    img: "\u{1F916}",
    badge: "ML Pioneer",
    instr: "Prof. Raj Patel",
    desc: "Build ML models with scikit-learn and TensorFlow.",
    tags: ["ML", "AI"],
    ce: 0
  }, {
    id: "e5",
    title: "Public Speaking Mastery",
    cat: "Communication",
    dur: "3 weeks",
    lc: 9,
    enrolled: 234,
    rating: 4.8,
    progress: 0,
    img: "\u{1F3A4}",
    badge: "Orator",
    instr: "Prof. Nina Chen",
    desc: "Deliver compelling presentations with confidence.",
    tags: ["speaking", "presentation"],
    ce: 0
  }, {
    id: "e6",
    title: "Financial Literacy 101",
    cat: "Finance",
    dur: "4 weeks",
    lc: 12,
    enrolled: 198,
    rating: 4.5,
    progress: 60,
    img: "\u{1F4B0}",
    badge: "Finance Savvy",
    instr: "Prof. Alex Jordan",
    desc: "Essential money management and investing.",
    tags: ["finance", "budgeting"],
    ce: 0
  }]
};
const EXPERTS = {
  wellness: [{
    id: "ex1",
    name: "Dr. Sarah Chen",
    role: "Licensed Psychologist",
    spec: "Stress & Anxiety",
    rating: 4.9,
    sessions: 342,
    avail: true,
    avatar: "\u{1F469}\u{200D}\u{2695}\u{FE0F}",
    bio: "15+ years in workplace mental health",
    slot: "Tomorrow, 2:00 PM",
    rate: "Included"
  }, {
    id: "ex2",
    name: "Mark Rivera, LCSW",
    role: "Clinical Social Worker",
    spec: "Resilience",
    rating: 4.8,
    sessions: 256,
    avail: true,
    avatar: "\u{1F468}\u{200D}\u{2695}\u{FE0F}",
    bio: "Burnout recovery specialist",
    slot: "Wed, 10:00 AM",
    rate: "Included"
  }, {
    id: "ex3",
    name: "Aisha Patel, PhD",
    role: "Mindfulness Coach",
    spec: "Mindfulness",
    rating: 4.9,
    sessions: 198,
    avail: false,
    avatar: "\u{1F9D8}\u{200D}\u{2640}\u{FE0F}",
    bio: "Certified MBSR instructor",
    slot: "Next week",
    rate: "Included"
  }, {
    id: "ex4",
    name: "James Liu, PsyD",
    role: "Communication Coach",
    spec: "Communication",
    rating: 4.7,
    sessions: 167,
    avail: true,
    avatar: "\u{1F4AC}",
    bio: "Executive communication expert",
    slot: "Thu, 3:30 PM",
    rate: "Included"
  }],
  healthcare: [{
    id: "ex1",
    name: "Dr. Rachel Green",
    role: "Clinical Educator",
    spec: "Assessment",
    rating: 4.9,
    sessions: 289,
    avail: true,
    avatar: "\u{1F469}\u{200D}\u{2695}\u{FE0F}",
    bio: "20 years in clinical education",
    slot: "Tomorrow, 11 AM",
    rate: "$75/hr"
  }, {
    id: "ex2",
    name: "Dr. Alan Brooks",
    role: "Pharmacist",
    spec: "Pharmacology",
    rating: 4.8,
    sessions: 198,
    avail: false,
    avatar: "\u{1F48A}",
    bio: "Board-certified pharmacologist",
    slot: "Next week",
    rate: "$85/hr"
  }, {
    id: "ex3",
    name: "Dr. Lisa Wang",
    role: "Telehealth Specialist",
    spec: "Virtual Care",
    rating: 4.7,
    sessions: 156,
    avail: true,
    avatar: "\u{1F4F1}",
    bio: "Telehealth education pioneer",
    slot: "Wed, 1 PM",
    rate: "$65/hr"
  }, {
    id: "ex4",
    name: "Dr. Kathy Nguyen",
    role: "Wound Care Expert",
    spec: "Wound Mgmt",
    rating: 4.9,
    sessions: 234,
    avail: true,
    avatar: "\u{1FA79}",
    bio: "National wound care consultant",
    slot: "Fri, 9 AM",
    rate: "$90/hr"
  }],
  education: [{
    id: "ex1",
    name: "Prof. Maria Santos",
    role: "Data Science Mentor",
    spec: "Python",
    rating: 4.9,
    sessions: 412,
    avail: true,
    avatar: "\u{1F469}\u{200D}\u{1F4BB}",
    bio: "Former data scientist at Google",
    slot: "Tomorrow, 4 PM",
    rate: "Free"
  }, {
    id: "ex2",
    name: "Prof. John Blake",
    role: "Writing Coach",
    spec: "Creative Writing",
    rating: 4.8,
    sessions: 234,
    avail: true,
    avatar: "\u{270D}\u{FE0F}",
    bio: "Published author, MFA Iowa",
    slot: "Wed, 2 PM",
    rate: "Free"
  }, {
    id: "ex3",
    name: "Prof. Kelly Tran",
    role: "Career Advisor",
    spec: "Marketing",
    rating: 4.7,
    sessions: 189,
    avail: false,
    avatar: "\u{1F4C8}",
    bio: "Former CMO turned educator",
    slot: "Next week",
    rate: "Free"
  }, {
    id: "ex4",
    name: "Prof. Raj Patel",
    role: "AI Tutor",
    spec: "Machine Learning",
    rating: 4.9,
    sessions: 345,
    avail: true,
    avatar: "\u{1F916}",
    bio: "PhD ML from Stanford",
    slot: "Thu, 11 AM",
    rate: "Free"
  }]
};
const USERS = [{
  id: "u1",
  name: "Alice Johnson",
  email: "alice@company.com",
  role: "learner",
  status: "active",
  enrolled: 4,
  completed: 2,
  lastActive: "2h ago",
  joined: "Jan 15"
}, {
  id: "u2",
  name: "Bob Smith",
  email: "bob@company.com",
  role: "learner",
  status: "active",
  enrolled: 3,
  completed: 1,
  lastActive: "1d ago",
  joined: "Jan 20"
}, {
  id: "u3",
  name: "Carol Davis",
  email: "carol@company.com",
  role: "manager",
  status: "active",
  enrolled: 5,
  completed: 3,
  lastActive: "30m ago",
  joined: "Dec 10"
}, {
  id: "u4",
  name: "Dan Wilson",
  email: "dan@company.com",
  role: "learner",
  status: "invited",
  enrolled: 0,
  completed: 0,
  lastActive: "Never",
  joined: "Feb 14"
}, {
  id: "u5",
  name: "Eva Martinez",
  email: "eva@company.com",
  role: "learner",
  status: "active",
  enrolled: 6,
  completed: 5,
  lastActive: "3h ago",
  joined: "Nov 5"
}, {
  id: "u6",
  name: "Frank Lee",
  email: "frank@company.com",
  role: "admin",
  status: "active",
  enrolled: 2,
  completed: 2,
  lastActive: "Now",
  joined: "Oct 1"
}, {
  id: "u7",
  name: "Grace Kim",
  email: "grace@company.com",
  role: "learner",
  status: "inactive",
  enrolled: 1,
  completed: 0,
  lastActive: "2w ago",
  joined: "Jan 8"
}, {
  id: "u8",
  name: "Henry Brown",
  email: "henry@company.com",
  role: "learner",
  status: "active",
  enrolled: 3,
  completed: 2,
  lastActive: "5h ago",
  joined: "Dec 22"
}];

// Utility Components
const ProgressRing = ({
  progress,
  size = 60,
  sw = 5,
  theme
}) => {
  const r = (size - sw) / 2,
    c = r * 2 * Math.PI,
    o = c - progress / 100 * c;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: `${theme.primary}15`,
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: progress === 100 ? theme.success : theme.primary,
    strokeWidth: sw,
    strokeDasharray: c,
    strokeDashoffset: o,
    strokeLinecap: "round",
    style: {
      transition: "stroke-dashoffset 1s ease"
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: size / 2,
    y: size / 2,
    textAnchor: "middle",
    dy: "0.35em",
    style: {
      transform: "rotate(90deg)",
      transformOrigin: "center",
      fontSize: size * 0.22,
      fontWeight: 700,
      fill: theme.text,
      fontFamily: theme.font
    }
  }, progress, "%"));
};
const Pill = ({
  label,
  color,
  small
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    padding: small ? "2px 8px" : "4px 12px",
    borderRadius: 20,
    fontSize: small ? 10 : 11,
    fontWeight: 600,
    background: color + "18",
    color,
    letterSpacing: 0.3,
    textTransform: "uppercase"
  }
}, label);
const Btn = ({
  children,
  primary,
  small,
  outline,
  disabled,
  onClick,
  style: s = {}
}) => {
  const {
    theme: t
  } = React.useContext(AuthContext) || {};
  const th = t || THEMES.wellness;
  const bg = primary ? th.primary : outline ? "transparent" : `${th.primary}10`;
  const clr = primary ? "#fff" : outline ? th.primary : th.primary;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    style: {
      padding: small ? "6px 14px" : "10px 22px",
      borderRadius: 12,
      background: disabled ? "#ccc" : bg,
      color: disabled ? "#888" : clr,
      border: outline ? `1px solid ${th.primary}30` : "none",
      fontSize: small ? 12 : 13,
      fontWeight: 600,
      cursor: disabled ? "default" : "pointer",
      fontFamily: th.font,
      transition: "all 0.2s",
      opacity: disabled ? 0.6 : 1,
      ...s
    }
  }, children);
};
const Modal = ({
  show,
  onClose,
  title,
  children
}) => {
  const {
    theme
  } = React.useContext(AuthContext);
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      backdropFilter: "blur(4px)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: theme.bgCard,
      borderRadius: 20,
      padding: "28px 32px",
      maxWidth: 520,
      width: "92%",
      maxHeight: "85vh",
      overflow: "auto",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 19,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      border: "none",
      background: `${theme.primary}10`,
      color: theme.text,
      fontSize: 16,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "x")), children));
};
const Toast = ({
  message,
  type = "success",
  onClose
}) => {
  const {
    theme
  } = React.useContext(AuthContext);
  React.useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      right: 24,
      background: theme.bgCard,
      borderRadius: 14,
      padding: "14px 22px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      zIndex: 2000,
      borderLeft: `4px solid ${type === "success" ? theme.success : theme.danger}`,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, type === "success" ? "\u2705" : "\u274C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: theme.text
    }
  }, message));
};
const genLessons = (count, progress) => Array.from({
  length: count
}, (_, i) => {
  const titles = ["Introduction", "Core Concepts", "Practical Exercise", "Deep Dive", "Case Study", "Knowledge Check", "Workshop", "Peer Review", "Advanced Topics", "Integration", "Real-world Application", "Capstone Project", "Self-Assessment", "Group Discussion", "Expert Q&A", "Final Exam"];
  return {
    id: i + 1,
    title: titles[i % 16],
    dur: `${8 + Math.floor(Math.random() * 20)} min`,
    type: ["video", "reading", "exercise", "quiz"][i % 4],
    done: i < Math.floor(progress / 100 * count),
    locked: i > Math.floor(progress / 100 * count) + 1
  };
});

// LOGIN PAGE
const LoginPage = ({
  onLogin
}) => {
  const [org, setOrg] = React.useState("wellness");
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [err, setErr] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const t = THEMES[org];
  const submit = e => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    setTimeout(() => {
      const acct = DEMO_ACCOUNTS.find(a => a.email === email && a.password === pw);
      if (acct) onLogin(acct, acct.org);else setErr("Invalid credentials. Use demo accounts below.");
      setLoading(false);
    }, 600);
  };
  const quick = acct => {
    setLoading(true);
    setTimeout(() => {
      onLogin(acct, acct.org);
      setLoading(false);
    }, 500);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      fontFamily: t.font
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: t.loginBg,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 60,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -80,
      right: -80,
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.05)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -120,
      left: -60,
      width: 400,
      height: 400,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.03)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 1,
      textAlign: "center",
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      marginBottom: 16
    }
  }, t.loginImage), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      fontFamily: t.fontDisplay,
      fontWeight: 700,
      color: "white",
      margin: "0 0 10px"
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "rgba(255,255,255,0.8)",
      lineHeight: 1.6
    }
  }, t.loginSubtext), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      justifyContent: "center",
      marginTop: 32
    }
  }, [{
    n: "500+",
    l: "Learners"
  }, {
    n: "50+",
    l: "Courses"
  }, {
    n: "98%",
    l: "Satisfaction"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "white"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.6)"
    }
  }, s.l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "36px 44px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: "#999",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Organization"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, Object.entries(THEMES).map(([key, th]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => setOrg(key),
    style: {
      flex: 1,
      padding: "10px 6px",
      borderRadius: 12,
      border: org === key ? `2px solid ${th.primary}` : "2px solid #eee",
      background: org === key ? `${th.primary}08` : "#fafafa",
      cursor: "pointer",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18
    }
  }, th.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: org === key ? th.primary : "#999",
      marginTop: 3
    }
  }, th.industry))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontFamily: t.fontDisplay,
      fontWeight: 700,
      color: t.text,
      margin: "0 0 4px"
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: t.textMuted,
      margin: "0 0 24px"
    }
  }, "Sign in to continue learning"), err && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FEF2F2",
      border: "1px solid #FECACA",
      borderRadius: 12,
      padding: "10px 14px",
      marginBottom: 14,
      fontSize: 12,
      color: "#DC2626"
    }
  }, err), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: t.text,
      display: "block",
      marginBottom: 5
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    placeholder: "you@org.com",
    style: {
      width: "100%",
      padding: "11px 14px",
      borderRadius: 12,
      border: `1px solid ${t.primary}20`,
      fontSize: 13,
      fontFamily: t.font,
      outline: "none",
      color: t.text,
      boxSizing: "border-box",
      background: "#FAFAFA"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: t.text,
      display: "block",
      marginBottom: 5
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    required: true,
    placeholder: "Enter password",
    style: {
      width: "100%",
      padding: "11px 14px",
      borderRadius: 12,
      border: `1px solid ${t.primary}20`,
      fontSize: 13,
      fontFamily: t.font,
      outline: "none",
      color: t.text,
      boxSizing: "border-box",
      background: "#FAFAFA"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 12,
      color: t.textMuted,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      accentColor: t.primary
    }
  }), " Remember me"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: t.primary,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading,
    style: {
      width: "100%",
      padding: 13,
      borderRadius: 14,
      background: loading ? `${t.primary}80` : t.primary,
      color: "white",
      border: "none",
      fontSize: 15,
      fontWeight: 700,
      cursor: loading ? "default" : "pointer",
      fontFamily: t.font
    }
  }, loading ? "Signing in..." : "Sign In")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 18,
      borderTop: "1px solid #eee"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: "#999",
      letterSpacing: 1,
      textTransform: "uppercase",
      marginBottom: 10,
      textAlign: "center"
    }
  }, "Quick Demo Login"), DEMO_ACCOUNTS.filter(a => a.org === org).map(acct => /*#__PURE__*/React.createElement("button", {
    key: acct.id,
    onClick: () => quick(acct),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 12px",
      borderRadius: 12,
      border: "1px solid #eee",
      background: "#FAFAFA",
      cursor: "pointer",
      width: "100%",
      marginBottom: 5,
      textAlign: "left"
    },
    onMouseEnter: e => e.currentTarget.style.background = `${t.primary}06`,
    onMouseLeave: e => e.currentTarget.style.background = "#FAFAFA"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: t.gradient,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 700,
      flexShrink: 0
    }
  }, acct.avatar), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: t.text
    }
  }, acct.firstName, " ", acct.lastName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: t.textMuted
    }
  }, acct.email)), /*#__PURE__*/React.createElement(Pill, {
    label: acct.role,
    color: acct.role === "admin" ? t.accent : acct.role === "manager" ? t.primaryLight : t.primary,
    small: true
  }))))));
};

// DASHBOARD
const Dashboard = ({
  nav
}) => {
  const {
    user,
    theme,
    courses
  } = React.useContext(AuthContext);
  const done = courses.filter(c => c.progress === 100);
  const active = courses.filter(c => c.progress > 0 && c.progress < 100);
  const total = courses.length ? Math.round(courses.reduce((a, c) => a + c.progress, 0) / courses.length) : 0;
  const experts = EXPERTS[user.org];
  const isAdm = user.role === "admin" || user.role === "manager";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.heroGradient,
      borderRadius: 20,
      padding: "30px 34px",
      color: "white",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -40,
      right: -20,
      fontSize: 130,
      opacity: 0.06
    }
  }, theme.icon), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      margin: "0 0 3px",
      letterSpacing: 1,
      textTransform: "uppercase"
    }
  }, new Date().getHours() < 12 ? "Good morning" : new Date().getHours() < 17 ? "Good afternoon" : "Good evening"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      margin: "0 0 5px"
    }
  }, user.firstName, " ", user.lastName), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      opacity: 0.8,
      margin: 0,
      maxWidth: 440
    }
  }, active.length > 0 ? `${active.length} course${active.length > 1 ? "s" : ""} in progress. Keep it up!` : "Browse courses to start learning."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 18
    }
  }, [{
    v: `${total}%`,
    l: "Progress"
  }, {
    v: "7 \u{1F525}",
    l: "Streak"
  }, {
    v: String(done.length),
    l: "Certificates"
  }, ...(isAdm ? [{
    v: String(USERS.filter(u => u.status === "active").length),
    l: "Active Users"
  }] : [])].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,255,255,0.12)",
      borderRadius: 12,
      padding: "9px 16px",
      backdropFilter: "blur(10px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.75
    }
  }, s.l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14
    }
  }, [{
    l: "Enrolled",
    v: courses.filter(c => c.progress > 0).length,
    i: "\u{1F4DA}",
    s: "+2 this month"
  }, {
    l: "Hours",
    v: "34.5",
    i: "\u{23F1}",
    s: "+8.2 this week"
  }, {
    l: "Badges",
    v: done.length,
    i: "\u{1F3C6}",
    s: done.length > 0 ? done[done.length - 1].badge : "Complete a course!"
  }, {
    l: "Sessions",
    v: "3",
    i: "\u{1F465}",
    s: "Next: Tomorrow"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: "16px 18px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, s.i), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      fontFamily: theme.fontDisplay,
      color: theme.text,
      marginTop: 6
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted,
      marginTop: 2
    }
  }, s.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.success,
      marginTop: 5,
      fontWeight: 500
    }
  }, s.s)))), active.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 16,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: 0
    }
  }, "Continue Learning"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav("courses"),
    style: {
      background: "none",
      border: "none",
      color: theme.primary,
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "View All")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, active.slice(0, 3).map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    onClick: () => nav("detail", c),
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 16,
      cursor: "pointer",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      transition: "all 0.25s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30
    }
  }, c.img), /*#__PURE__*/React.createElement(ProgressRing, {
    progress: c.progress,
    size: 42,
    sw: 4,
    theme: theme
  })), /*#__PURE__*/React.createElement(Pill, {
    label: c.cat,
    color: theme.primary,
    small: true
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      margin: "5px 0 3px",
      color: theme.text
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: theme.textMuted,
      margin: 0
    }
  }, c.lc, " lessons"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      background: `${theme.primary}12`,
      borderRadius: 8,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${c.progress}%`,
      background: theme.primary,
      borderRadius: 8
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 14,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Upcoming Sessions"), experts.filter(e => e.avail).slice(0, 2).map((ex, i) => /*#__PURE__*/React.createElement("div", {
    key: ex.id,
    style: {
      display: "flex",
      alignItems: "center",
      padding: "9px 0",
      borderBottom: i < 1 ? `1px solid ${theme.primary}08` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: theme.gradient,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      marginRight: 10
    }
  }, ex.avatar), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted
    }
  }, ex.slot)), /*#__PURE__*/React.createElement(Btn, {
    small: true,
    outline: true
  }, "Join")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 14,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Recent Messages"), [{
    from: "Dr. Sarah Chen",
    av: "\u{1F469}\u{200D}\u{2695}\u{FE0F}",
    msg: "Great progress on your exercises!",
    t: "10m ago",
    unread: true
  }, {
    from: "Course Bot",
    av: "\u{1F916}",
    msg: "New lesson unlocked!",
    t: "2h ago",
    unread: true
  }, {
    from: "Carol Davis",
    av: "CD",
    msg: "Can you review the report?",
    t: "Yesterday",
    unread: false
  }].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      padding: "8px 0",
      borderBottom: i < 2 ? `1px solid ${theme.primary}06` : "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: `${theme.primary}10`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: m.av.length > 2 ? 17 : 12,
      fontWeight: 700,
      color: theme.primary,
      marginRight: 10
    }
  }, m.av), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: m.unread ? 700 : 500,
      color: theme.text
    }
  }, m.from), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, m.msg)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted,
      flexShrink: 0,
      marginLeft: 6
    }
  }, m.t))))));
};

// COURSES LIST
const CoursesList = ({
  nav
}) => {
  const {
    user,
    theme,
    courses
  } = React.useContext(AuthContext);
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const filtered = courses.filter(c => {
    const ms = c.title.toLowerCase().includes(search.toLowerCase()) || c.cat.toLowerCase().includes(search.toLowerCase());
    const mf = filter === "all" || filter === "active" && c.progress > 0 && c.progress < 100 || filter === "done" && c.progress === 100 || filter === "new" && c.progress === 0;
    return ms && mf;
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: 0
    }
  }, "Course Library"), user.role === "admin" && /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => nav("content")
  }, "+ Add Course")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search courses...",
    value: search,
    onChange: e => setSearch(e.target.value),
    style: {
      padding: "9px 14px",
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      background: theme.bgCard,
      fontSize: 13,
      fontFamily: theme.font,
      width: 260,
      outline: "none",
      color: theme.text
    }
  }), [["all", "All"], ["active", "In Progress"], ["done", "Completed"], ["new", "Not Started"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFilter(k),
    style: {
      padding: "7px 14px",
      borderRadius: 10,
      border: `1px solid ${filter === k ? theme.primary : theme.primary + "18"}`,
      background: filter === k ? `${theme.primary}10` : "transparent",
      color: filter === k ? theme.primary : theme.textMuted,
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, filtered.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    onClick: () => nav("detail", c),
    style: {
      background: theme.bgCard,
      borderRadius: 18,
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      transition: "all 0.25s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.gradient,
      padding: "22px 20px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 38
    }
  }, c.img), c.progress === 100 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(255,255,255,0.25)",
      borderRadius: 8,
      padding: "3px 9px",
      fontSize: 10,
      color: "white",
      fontWeight: 600
    }
  }, "Done"), c.ce > 0 && c.progress < 100 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(255,255,255,0.2)",
      borderRadius: 8,
      padding: "3px 9px",
      fontSize: 10,
      color: "white",
      fontWeight: 600
    }
  }, c.ce, " CE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px 16px"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    label: c.cat,
    color: theme.primary,
    small: true
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      margin: "5px 0 4px",
      color: theme.text
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: theme.textMuted,
      margin: "0 0 8px",
      lineHeight: 1.5,
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, c.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: theme.textMuted,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, c.lc, " lessons"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: theme.accentLight
    }
  }, "★".repeat(Math.floor(c.rating)), " ", c.rating)), c.progress > 0 && c.progress < 100 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: `${theme.primary}12`,
      borderRadius: 8,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${c.progress}%`,
      background: theme.primary,
      borderRadius: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 10,
      color: theme.textLight,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, c.enrolled, " enrolled"), /*#__PURE__*/React.createElement("span", null, c.instr)))))));
};

// COURSE DETAIL + LESSON PLAYER
const CourseDetail = ({
  course: init,
  nav
}) => {
  const {
    theme
  } = React.useContext(AuthContext);
  const [course, setCourse] = React.useState(init);
  const [activeL, setActiveL] = React.useState(null);
  const [quiz, setQuiz] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const lessons = React.useMemo(() => genLessons(course.lc, course.progress), [course]);
  const complete = id => {
    const idx = lessons.findIndex(l => l.id === id);
    setCourse(p => ({
      ...p,
      progress: Math.min(100, Math.round((idx + 1) / course.lc * 100))
    }));
    setActiveL(null);
  };
  if (activeL) {
    const l = lessons.find(x => x.id === activeL);
    const isQuiz = l.type === "quiz";
    const qs = [{
      q: "What is the primary benefit discussed?",
      opts: ["Improved focus", "Better communication", "Stress reduction", "Time management"],
      ans: 2
    }, {
      q: "Which technique was recommended?",
      opts: ["Journaling", "Meditation", "Exercise", "All of the above"],
      ans: 3
    }];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setActiveL(null),
      style: {
        background: "none",
        border: "none",
        color: theme.primary,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        marginBottom: 14,
        padding: 0
      }
    }, "Back to Course"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 280px",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: theme.bgCard,
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }
    }, l.type === "video" && /*#__PURE__*/React.createElement("div", {
      style: {
        background: theme.heroGradient,
        height: 280,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(4px)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 24,
        marginLeft: 3
      }
    }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 14,
        left: 14,
        right: 14,
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 3,
        background: "rgba(255,255,255,0.3)",
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "35%",
        height: "100%",
        background: "white",
        borderRadius: 4
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "white",
        fontSize: 11
      }
    }, "12:34 / ", l.dur))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      label: l.type,
      color: theme.primary,
      small: true
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 18,
        fontFamily: theme.fontDisplay,
        fontWeight: 700,
        color: theme.text,
        margin: "8px 0 6px"
      }
    }, "Lesson ", l.id, ": ", l.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: theme.textMuted,
        marginBottom: 18
      }
    }, l.dur, " - ", course.instr), isQuiz ? /*#__PURE__*/React.createElement("div", null, qs.map((q, qi) => /*#__PURE__*/React.createElement("div", {
      key: qi,
      style: {
        marginBottom: 20,
        padding: 18,
        background: `${theme.primary}04`,
        borderRadius: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: theme.text,
        marginBottom: 10
      }
    }, qi + 1, ". ", q.q), q.opts.map((opt, oi) => {
      const sel = quiz[qi] === oi,
        ok = submitted && oi === q.ans,
        bad = submitted && sel && oi !== q.ans;
      return /*#__PURE__*/React.createElement("button", {
        key: oi,
        onClick: () => !submitted && setQuiz(p => ({
          ...p,
          [qi]: oi
        })),
        style: {
          display: "block",
          width: "100%",
          padding: "9px 12px",
          marginBottom: 5,
          borderRadius: 10,
          border: `2px solid ${ok ? theme.success : bad ? theme.danger : sel ? theme.primary : theme.primary + "18"}`,
          background: ok ? `${theme.success}10` : bad ? `${theme.danger}10` : sel ? `${theme.primary}06` : "white",
          color: theme.text,
          fontSize: 12,
          cursor: submitted ? "default" : "pointer",
          textAlign: "left",
          fontFamily: theme.font
        }
      }, opt, " ", ok && "\u2713", " ", bad && "\u2717");
    }))), !submitted ? /*#__PURE__*/React.createElement(Btn, {
      primary: true,
      onClick: () => setSubmitted(true),
      disabled: Object.keys(quiz).length < qs.length
    }, "Submit") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Btn, {
      primary: true,
      onClick: () => complete(l.id)
    }, "Complete"), /*#__PURE__*/React.createElement(Btn, {
      outline: true,
      onClick: () => {
        setQuiz({});
        setSubmitted(false);
      }
    }, "Retry"))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.8,
        color: theme.text
      }
    }, "This lesson covers essential concepts and practical applications. Through interactive exercises and real-world examples, you'll build a solid foundation."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.8,
        color: theme.text
      }
    }, "Key objectives: Understand foundational principles, apply techniques in scenarios, evaluate progress, and connect concepts to daily practice."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        padding: 16,
        background: `${theme.accent}10`,
        borderRadius: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: theme.text,
        marginBottom: 4
      }
    }, "Key Takeaway"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: theme.textMuted,
        lineHeight: 1.6
      }
    }, "Practice these techniques daily. Consistency matters more than intensity.")), !l.done && /*#__PURE__*/React.createElement(Btn, {
      primary: true,
      onClick: () => complete(l.id),
      style: {
        marginTop: 18
      }
    }, "Mark Complete")))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: theme.bgCard,
        borderRadius: 14,
        padding: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        alignSelf: "flex-start",
        position: "sticky",
        top: 16,
        maxHeight: "calc(100vh - 100px)",
        overflow: "auto"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: theme.text,
        margin: "0 0 10px"
      }
    }, "Lessons"), lessons.map(x => /*#__PURE__*/React.createElement("button", {
      key: x.id,
      onClick: () => !x.locked && setActiveL(x.id),
      style: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "8px 8px",
        borderRadius: 9,
        border: "none",
        background: x.id === activeL ? `${theme.primary}10` : "transparent",
        cursor: x.locked ? "default" : "pointer",
        marginBottom: 1,
        opacity: x.locked ? 0.35 : 1,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 7,
        background: x.done ? theme.success : x.id === activeL ? theme.primary : `${theme.primary}10`,
        color: x.done || x.id === activeL ? "white" : theme.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 9,
        fontWeight: 700,
        marginRight: 8,
        flexShrink: 0
      }
    }, x.done ? "\u2713" : x.locked ? "\u{1F512}" : x.id), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: x.id === activeL ? 600 : 400,
        color: theme.text,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, x.title))))));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav("courses"),
    style: {
      background: "none",
      border: "none",
      color: theme.primary,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      marginBottom: 12,
      padding: 0
    }
  }, "Back to Courses"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.heroGradient,
      borderRadius: 20,
      padding: "28px 32px",
      color: "white",
      marginBottom: 20,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 32,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 80,
      opacity: 0.1
    }
  }, course.img), /*#__PURE__*/React.createElement(Pill, {
    label: course.cat,
    color: "rgba(255,255,255,0.8)",
    small: true
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      margin: "6px 0 5px"
    }
  }, course.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      opacity: 0.85,
      margin: "0 0 12px",
      maxWidth: 460
    }
  }, course.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.75,
      marginBottom: 14
    }
  }, course.lc, " lessons - ", course.dur, " - ", course.enrolled, " enrolled - ", course.rating, course.ce > 0 ? ` - ${course.ce} CE Credits` : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const n = lessons.find(l => !l.done && !l.locked);
      if (n) setActiveL(n.id);
    },
    style: {
      padding: "11px 24px",
      borderRadius: 12,
      background: "white",
      color: theme.primaryDark,
      border: "none",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, course.progress > 0 ? "Continue" : "Start"), course.progress === 100 && /*#__PURE__*/React.createElement(Btn, {
    style: {
      background: "rgba(255,255,255,0.2)",
      color: "white",
      border: "1px solid rgba(255,255,255,0.3)"
    }
  }, "View Certificate"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 260px",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Course Content"), lessons.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    onClick: () => !l.locked && setActiveL(l.id),
    style: {
      display: "flex",
      alignItems: "center",
      padding: "10px 12px",
      borderRadius: 11,
      marginBottom: 3,
      background: l.done ? `${theme.success}05` : "transparent",
      cursor: l.locked ? "default" : "pointer",
      opacity: l.locked ? 0.35 : 1
    },
    onMouseEnter: e => {
      if (!l.locked && !l.done) e.currentTarget.style.background = `${theme.primary}05`;
    },
    onMouseLeave: e => {
      if (!l.locked && !l.done) e.currentTarget.style.background = "transparent";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 9,
      background: l.done ? theme.success : `${theme.primary}10`,
      color: l.done ? "white" : theme.primary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 700,
      marginRight: 10,
      flexShrink: 0
    }
  }, l.done ? "\u2713" : l.locked ? "\u{1F512}" : l.id), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, l.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted,
      marginTop: 1
    }
  }, {
    "video": "\u{1F3A5} Video",
    "reading": "\u{1F4D6} Reading",
    "exercise": "\u{270F}\u{FE0F} Exercise",
    "quiz": "\u2753 Quiz"
  }[l.type], " - ", l.dur)), l.done && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: theme.success,
      fontWeight: 600
    }
  }, "Done")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 20,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    progress: course.progress,
    size: 80,
    sw: 6,
    theme: theme
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text,
      marginTop: 8
    }
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted,
      marginTop: 2
    }
  }, lessons.filter(l => l.done).length, "/", course.lc, " lessons")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: `${theme.accent}10`,
      borderRadius: 14,
      padding: 18,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32
    }
  }, "\u{1F3C5}"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: theme.text,
      marginTop: 4
    }
  }, course.badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted,
      marginTop: 2
    }
  }, "Earn on completion")))));
};

// EXPERTS
const ExpertsPage = () => {
  const {
    user,
    theme
  } = React.useContext(AuthContext);
  const [booking, setBooking] = React.useState(null);
  const [booked, setBooked] = React.useState(false);
  const experts = EXPERTS[user.org];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 3px"
    }
  }, "1:1 Expert Sessions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: theme.textMuted,
      margin: "0 0 20px"
    }
  }, "Connect with mentors and coaches for personalized guidance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16
    }
  }, experts.map(ex => /*#__PURE__*/React.createElement("div", {
    key: ex.id,
    style: {
      background: theme.bgCard,
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      transition: "all 0.25s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      background: theme.gradient,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      flexShrink: 0
    }
  }, ex.avatar), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      margin: 0,
      color: theme.text
    }
  }, ex.name), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 4,
      background: ex.avail ? theme.success : "#ccc"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: theme.primary,
      fontWeight: 500,
      marginTop: 1
    }
  }, ex.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted,
      marginTop: 1
    }
  }, ex.bio))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderTop: `1px solid ${theme.primary}08`,
      borderBottom: `1px solid ${theme.primary}08`,
      marginBottom: 12,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: theme.text
    }
  }, ex.sessions), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: theme.textMuted
    }
  }, "Sessions")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: theme.text
    }
  }, ex.rating), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: theme.textMuted
    }
  }, "Rating")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, ex.rate), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: theme.textMuted
    }
  }, "Rate")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: ex.avail ? theme.success : theme.textMuted
    }
  }, ex.avail ? ex.slot : "N/A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: theme.textMuted
    }
  }, "Next"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    disabled: !ex.avail,
    onClick: () => setBooking(ex),
    style: {
      flex: 1
    }
  }, ex.avail ? "Book Session" : "Unavailable"), /*#__PURE__*/React.createElement(Btn, {
    outline: true
  }, "Message"))))), /*#__PURE__*/React.createElement(Modal, {
    show: !!booking,
    onClose: () => {
      setBooking(null);
      setBooked(false);
    },
    title: booked ? "Booked!" : `Book ${booking?.name}`
  }, booked ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 10
    }
  }, "\u{1F389}"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: theme.text
    }
  }, "Session confirmed!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: theme.textMuted,
      marginTop: 4
    }
  }, booking?.slot, " with ", booking?.name), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => {
      setBooking(null);
      setBooked(false);
    },
    style: {
      marginTop: 16
    }
  }, "Done")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: theme.textMuted,
      margin: "0 0 14px"
    }
  }, "Choose a time slot:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 6,
      marginBottom: 16
    }
  }, ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "3:30 PM", "4:00 PM"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setBooked(true),
    style: {
      padding: 9,
      borderRadius: 10,
      border: `1px solid ${theme.primary}18`,
      background: "white",
      fontSize: 12,
      cursor: "pointer",
      fontFamily: theme.font
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = `${theme.primary}08`;
      e.currentTarget.style.borderColor = theme.primary;
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "white";
      e.currentTarget.style.borderColor = `${theme.primary}18`;
    }
  }, t))))));
};

// ACHIEVEMENTS
const Achievements = () => {
  const {
    theme,
    courses
  } = React.useContext(AuthContext);
  const done = courses.filter(c => c.progress === 100);
  const [cert, setCert] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 20px"
    }
  }, "Achievements"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.heroGradient,
      borderRadius: 16,
      padding: 20,
      color: "white",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      fontFamily: theme.fontDisplay
    }
  }, "2,450"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.8
    }
  }, "Points")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 20,
      textAlign: "center",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      fontFamily: theme.fontDisplay,
      color: theme.text
    }
  }, "7 ", "\u{1F525}"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted
    }
  }, "Streak")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 20,
      textAlign: "center",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      fontFamily: theme.fontDisplay,
      color: theme.text
    }
  }, "#12"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted
    }
  }, "Rank"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Badges"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 12,
      marginBottom: 24
    }
  }, courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 16,
      textAlign: "center",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      opacity: c.progress === 100 ? 1 : 0.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 4
    }
  }, c.img), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: theme.text
    }
  }, c.badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: theme.textMuted,
      marginTop: 2
    }
  }, c.progress === 100 ? "Earned" : `${c.progress}%`)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Certificates"), done.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 28,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36
    }
  }, "\u{1F4DC}"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: theme.textMuted,
      marginTop: 6
    }
  }, "Complete a course to earn a certificate!")) : done.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    onClick: () => setCert(c),
    style: {
      background: theme.bgCard,
      borderRadius: 12,
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\u{1F3C6}"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted
    }
  }, "Certificate", c.ce > 0 ? ` - ${c.ce} CE` : ""))), /*#__PURE__*/React.createElement(Btn, {
    small: true,
    primary: true
  }, "View"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "24px 0 12px"
    }
  }, "Leaderboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 16,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, ["Eva Martinez", "Carol Davis", "You", "Henry Brown", "Alice Johnson"].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      padding: "8px 6px",
      borderRadius: 8,
      background: n === "You" ? `${theme.primary}06` : "transparent",
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      background: i < 3 ? [theme.accent, theme.primaryLight, theme.primary][i] : `${theme.primary}10`,
      color: i < 3 ? "white" : theme.textMuted,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      fontWeight: 700,
      marginRight: 10
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12,
      fontWeight: n === "You" ? 700 : 500,
      color: theme.text
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.primary
    }
  }, [3200, 2890, 2450, 2100, 1800][i])))), /*#__PURE__*/React.createElement(Modal, {
    show: !!cert,
    onClose: () => setCert(null),
    title: ""
  }, cert && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.gradient,
      borderRadius: 16,
      padding: "32px 24px",
      color: "white",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: 3,
      textTransform: "uppercase",
      opacity: 0.7
    }
  }, "Certificate of Completion"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 1,
      background: "rgba(255,255,255,0.3)",
      margin: "8px auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.7,
      marginTop: 6
    }
  }, "This certifies that"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      margin: "4px 0"
    }
  }, "Alex Thompson"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.7
    }
  }, "has completed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      margin: "4px 0"
    }
  }, cert.title), cert.ce > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.8,
      marginTop: 4
    }
  }, cert.ce, " CE Credits"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 36
    }
  }, "\u{1F3C5}"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      marginTop: 3
    }
  }, theme.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      opacity: 0.5,
      marginTop: 4
    }
  }, "CRT-", cert.id, "-2026 | Feb 12, 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    primary: true
  }, "Download PDF"), /*#__PURE__*/React.createElement(Btn, {
    outline: true
  }, "Share")))));
};

// ADMIN: USERS
const UsersPage = () => {
  const {
    theme,
    courses
  } = React.useContext(AuthContext);
  const [invite, setInvite] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const filtered = USERS.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: 0
    }
  }, "Manage Users"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: theme.textMuted,
      margin: "3px 0 0"
    }
  }, USERS.length, " total - ", USERS.filter(u => u.status === "active").length, " active")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search...",
    value: search,
    onChange: e => setSearch(e.target.value),
    style: {
      padding: "9px 14px",
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      background: theme.bgCard,
      fontSize: 12,
      width: 200,
      outline: "none",
      color: theme.text,
      fontFamily: theme.font
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => setInvite(true)
  }, "+ Invite"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: theme.font
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: `2px solid ${theme.primary}08`
    }
  }, ["User", "Role", "Status", "Enrolled", "Done", "Joined", "Actions"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "11px 14px",
      textAlign: "left",
      fontSize: 10,
      fontWeight: 700,
      color: theme.textMuted,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(u => /*#__PURE__*/React.createElement("tr", {
    key: u.id,
    style: {
      borderBottom: `1px solid ${theme.primary}05`
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      background: theme.gradient,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 700
    }
  }, u.name[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, u.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted
    }
  }, u.email)))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    label: u.role,
    color: u.role === "admin" ? theme.accent : u.role === "manager" ? theme.primaryLight : theme.primary,
    small: true
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    label: u.status,
    color: u.status === "active" ? theme.success : u.status === "invited" ? theme.accent : theme.warning,
    small: true
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px",
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, u.enrolled), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px",
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, u.completed), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px",
      fontSize: 11,
      color: theme.textMuted
    }
  }, u.joined), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    small: true,
    outline: true
  }, "Edit"))))))), /*#__PURE__*/React.createElement(Modal, {
    show: invite,
    onClose: () => setInvite(false),
    title: "Invite Users"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: theme.textMuted,
      margin: "0 0 14px"
    }
  }, "Send email invitations to add learners."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 5
    }
  }, "Email Addresses"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "user1@org.com\nuser2@org.com",
    style: {
      width: "100%",
      minHeight: 80,
      padding: 12,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      resize: "vertical",
      outline: "none",
      color: theme.text,
      background: theme.bg,
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 5
    }
  }, "Role"), /*#__PURE__*/React.createElement("select", {
    style: {
      width: "100%",
      padding: 10,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      outline: "none",
      color: theme.text,
      background: theme.bg
    }
  }, /*#__PURE__*/React.createElement("option", null, "Learner"), /*#__PURE__*/React.createElement("option", null, "Manager"), /*#__PURE__*/React.createElement("option", null, "Admin"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 5
    }
  }, "Auto-enroll"), /*#__PURE__*/React.createElement("select", {
    style: {
      width: "100%",
      padding: 10,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      outline: "none",
      color: theme.text,
      background: theme.bg
    }
  }, /*#__PURE__*/React.createElement("option", null, "None"), courses.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id
  }, c.title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    outline: true,
    onClick: () => setInvite(false)
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => {
      setInvite(false);
      setToast({
        m: "Invites sent!",
        t: "success"
      });
    }
  }, "Send"))), toast && /*#__PURE__*/React.createElement(Toast, {
    message: toast.m,
    type: toast.t,
    onClose: () => setToast(null)
  }));
};

// ADMIN: CONTENT
const ContentPage = () => {
  const {
    theme,
    courses
  } = React.useContext(AuthContext);
  const [upload, setUpload] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [drag, setDrag] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: 0
    }
  }, "Content Manager"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: theme.textMuted,
      margin: "3px 0 0"
    }
  }, "Upload and manage learning content")), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => setUpload(true)
  }, "+ Upload")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 20
    }
  }, [["Videos", 24, "\u{1F3A5}", "2.4 GB"], ["Docs", 38, "\u{1F4C4}", "156 MB"], ["Quizzes", 15, "\u{2753}", "--"], ["SCORM", 6, "\u{1F4E6}", "890 MB"]].map(([t, n, i, s], idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 18,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      marginBottom: 4
    }
  }, i), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: theme.text,
      fontFamily: theme.fontDisplay
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.primary,
      marginTop: 2,
      fontWeight: 500
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Recent Uploads"), [["Q1 Report.pdf", "PDF", "2h ago", "4.2 MB"], ["Video Series", "Video", "1d ago", "234 MB"], ["Quiz Pack", "Quiz", "3d ago", "--"], ["Audio Guide.mp3", "Audio", "5d ago", "45 MB"], ["Workbook.docx", "Doc", "1w ago", "12 MB"]].map(([n, t, u, s], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: i < 4 ? `1px solid ${theme.primary}05` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: `${theme.primary}08`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      marginRight: 10
    }
  }, {
    "PDF": "\u{1F4C4}",
    "Video": "\u{1F3A5}",
    "Quiz": "\u{2753}",
    "Audio": "\u{1F3B5}",
    "Doc": "\u{1F4DD}"
  }[t]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted
    }
  }, t, " - ", s)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted,
      marginRight: 12
    }
  }, u), /*#__PURE__*/React.createElement(Btn, {
    small: true,
    outline: true
  }, "Manage")))), /*#__PURE__*/React.createElement(Modal, {
    show: upload,
    onClose: () => setUpload(false),
    title: "Upload Content"
  }, /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
    },
    style: {
      border: `2px dashed ${drag ? theme.primary : theme.primary + "28"}`,
      borderRadius: 16,
      padding: "32px 18px",
      textAlign: "center",
      background: drag ? `${theme.primary}06` : `${theme.primary}02`,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 6
    }
  }, "\u{1F4C1}"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: theme.text
    }
  }, "Drop files or click to browse"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted,
      marginTop: 3
    }
  }, "PDF, DOCX, MP4, MP3, SCORM, PPT"), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    style: {
      marginTop: 12
    }
  }, "Browse")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 5
    }
  }, "Title"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Content title...",
    style: {
      width: "100%",
      padding: 10,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      outline: "none",
      color: theme.text,
      boxSizing: "border-box",
      background: theme.bg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 5
    }
  }, "Course"), /*#__PURE__*/React.createElement("select", {
    style: {
      width: "100%",
      padding: 10,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      outline: "none",
      color: theme.text,
      background: theme.bg
    }
  }, /*#__PURE__*/React.createElement("option", null, "Select..."), courses.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id
  }, c.title)), /*#__PURE__*/React.createElement("option", null, "+ New Course"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    outline: true,
    onClick: () => setUpload(false)
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => {
      setUpload(false);
      setToast({
        m: "Uploaded!",
        t: "success"
      });
    }
  }, "Upload"))), toast && /*#__PURE__*/React.createElement(Toast, {
    message: toast.m,
    type: toast.t,
    onClose: () => setToast(null)
  }));
};

// ADMIN: ANALYTICS
const AnalyticsPage = () => {
  const {
    theme,
    courses
  } = React.useContext(AuthContext);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 20px"
    }
  }, "Analytics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 20
    }
  }, [["Active Users", "156", "+12%", true], ["Completions", "89", "+24%", true], ["Engagement", "73%", "+5%", true], ["Satisfaction", "4.7/5", "-0.1", false]].map(([l, v, c, up], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 18,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: theme.textMuted,
      marginBottom: 5
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.text,
      fontFamily: theme.fontDisplay
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: up ? theme.success : theme.warning,
      fontWeight: 600,
      marginTop: 3
    }
  }, up ? "\u2191" : "\u2193", " ", c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 20,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Weekly Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 6,
      height: 120
    }
  }, [65, 45, 78, 90, 55, 82, 70].map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: `${v}%`,
      background: theme.gradient,
      borderRadius: 5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: theme.textMuted
    }
  }, "MTWTFSS"[i]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 14,
      padding: 20,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 12px"
    }
  }, "Completion Rates"), courses.slice(0, 4).map((c, i) => {
    const r = 40 + i * 12;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: theme.text
      }
    }, c.title.length > 28 ? c.title.slice(0, 28) + "..." : c.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: theme.primary,
        fontWeight: 600
      }
    }, r, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: `${theme.primary}10`,
        borderRadius: 5,
        height: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${r}%`,
        background: theme.gradient,
        borderRadius: 5
      }
    })));
  }))));
};

// SETTINGS
const Settings = () => {
  const {
    user,
    theme
  } = React.useContext(AuthContext);
  const [toast, setToast] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontFamily: theme.fontDisplay,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 20px"
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 22,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 14px"
    }
  }, "Profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      background: theme.gradient,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: 700
    }
  }, user.avatar), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: theme.text
    }
  }, user.firstName, " ", user.lastName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: theme.textMuted
    }
  }, user.email), /*#__PURE__*/React.createElement(Pill, {
    label: user.role,
    color: theme.primary,
    small: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 4
    }
  }, "First Name"), /*#__PURE__*/React.createElement("input", {
    defaultValue: user.firstName,
    style: {
      width: "100%",
      padding: 10,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      outline: "none",
      color: theme.text,
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 4
    }
  }, "Last Name"), /*#__PURE__*/React.createElement("input", {
    defaultValue: user.lastName,
    style: {
      width: "100%",
      padding: 10,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      outline: "none",
      color: theme.text,
      boxSizing: "border-box"
    }
  }))), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => setToast({
      m: "Saved!",
      t: "success"
    })
  }, "Save")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 22,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 14px"
    }
  }, "Notifications"), ["Course updates", "Session reminders", "Achievement alerts", "Weekly digest"].map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 0",
      borderBottom: i < 3 ? `1px solid ${theme.primary}06` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: theme.text
    }
  }, item), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      accentColor: theme.primary,
      width: 16,
      height: 16
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: theme.bgCard,
      borderRadius: 16,
      padding: 22,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 14px"
    }
  }, "Change Password"), ["Current Password", "New Password", "Confirm Password"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text,
      display: "block",
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022",
    style: {
      width: "100%",
      padding: 10,
      borderRadius: 12,
      border: `1px solid ${theme.primary}18`,
      fontSize: 12,
      fontFamily: theme.font,
      outline: "none",
      color: theme.text,
      boxSizing: "border-box"
    }
  }))), /*#__PURE__*/React.createElement(Btn, {
    primary: true,
    onClick: () => setToast({
      m: "Password updated!",
      t: "success"
    })
  }, "Update")), toast && /*#__PURE__*/React.createElement(Toast, {
    message: toast.m,
    type: toast.t,
    onClose: () => setToast(null)
  }));
};

// MAIN APP
window.LMSApp = function LMSApp() {
  const [user, setUser] = React.useState(null);
  const [themeKey, setThemeKey] = React.useState("wellness");
  const [view, setView] = React.useState("dashboard");
  const [viewData, setViewData] = React.useState(null);
  const [sidebar, setSidebar] = React.useState(true);
  const [notifs, setNotifs] = React.useState(false);
  const [anim, setAnim] = React.useState(false);
  const theme = THEMES[themeKey];
  const courses = COURSES[themeKey];
  const isAdm = user?.role === "admin" || user?.role === "manager";
  React.useEffect(() => {
    setAnim(true);
    const t = setTimeout(() => setAnim(false), 350);
    return () => clearTimeout(t);
  }, [view]);
  const login = (u, org) => {
    setUser(u);
    setThemeKey(org);
    setView("dashboard");
  };
  const logout = () => {
    setUser(null);
    setView("dashboard");
    setViewData(null);
  };
  const nav = (v, d = null) => {
    setView(v);
    setViewData(d);
  };
  if (!user) return /*#__PURE__*/React.createElement(LoginPage, {
    onLogin: login
  });
  const navItems = [{
    key: "dashboard",
    label: "Dashboard",
    icon: "\u25C9"
  }, {
    key: "courses",
    label: "Courses",
    icon: "\u25C8"
  }, {
    key: "experts",
    label: "1:1 Sessions",
    icon: "\u25CE"
  }, {
    key: "achievements",
    label: "Achievements",
    icon: "\u25C6"
  }, ...(isAdm ? [{
    key: "users",
    label: "Manage Users",
    icon: "\u25C7"
  }, {
    key: "content",
    label: "Content",
    icon: "\u25CA"
  }, {
    key: "analytics",
    label: "Analytics",
    icon: "\u25A3"
  }] : []), {
    key: "settings",
    label: "Settings",
    icon: "\u2699"
  }];
  const renderView = () => {
    switch (view) {
      case "dashboard":
        return /*#__PURE__*/React.createElement(Dashboard, {
          nav: nav
        });
      case "courses":
        return /*#__PURE__*/React.createElement(CoursesList, {
          nav: nav
        });
      case "detail":
        return /*#__PURE__*/React.createElement(CourseDetail, {
          course: viewData,
          nav: nav
        });
      case "experts":
        return /*#__PURE__*/React.createElement(ExpertsPage, null);
      case "achievements":
        return /*#__PURE__*/React.createElement(Achievements, null);
      case "users":
        return isAdm ? /*#__PURE__*/React.createElement(UsersPage, null) : /*#__PURE__*/React.createElement(Dashboard, {
          nav: nav
        });
      case "content":
        return isAdm ? /*#__PURE__*/React.createElement(ContentPage, null) : /*#__PURE__*/React.createElement(Dashboard, {
          nav: nav
        });
      case "analytics":
        return isAdm ? /*#__PURE__*/React.createElement(AnalyticsPage, null) : /*#__PURE__*/React.createElement(Dashboard, {
          nav: nav
        });
      case "settings":
        return /*#__PURE__*/React.createElement(Settings, null);
      default:
        return /*#__PURE__*/React.createElement(Dashboard, {
          nav: nav
        });
    }
  };
  const ctx = {
    user,
    theme,
    courses,
    themeKey
  };
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: ctx
  }, /*#__PURE__*/React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/React.createElement("style", null, `
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${theme.primary}20; border-radius: 3px; }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      background: theme.bg,
      fontFamily: theme.font,
      transition: "background 0.4s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: sidebar ? 220 : 56,
      background: theme.bgSidebar,
      display: "flex",
      flexDirection: "column",
      transition: "width 0.3s ease",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: sidebar ? "16px 16px 12px" : "16px 8px 12px",
      display: "flex",
      alignItems: "center",
      gap: 9,
      cursor: "pointer"
    },
    onClick: () => setSidebar(!sidebar)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 11,
      background: "rgba(255,255,255,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      flexShrink: 0
    }
  }, theme.icon), sidebar && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "white",
      fontSize: 15,
      fontWeight: 700,
      fontFamily: theme.fontDisplay,
      whiteSpace: "nowrap"
    }
  }, theme.name)), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: "4px 6px",
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, navItems.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.key,
    onClick: () => {
      setView(item.key);
      setViewData(null);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: sidebar ? "9px 11px" : "9px 0",
      justifyContent: sidebar ? "flex-start" : "center",
      borderRadius: 10,
      border: "none",
      background: view === item.key || view === "detail" && item.key === "courses" ? "rgba(255,255,255,0.13)" : "transparent",
      color: view === item.key || view === "detail" && item.key === "courses" ? "white" : theme.sidebarText,
      fontSize: 12,
      fontWeight: view === item.key ? 600 : 400,
      cursor: "pointer",
      fontFamily: theme.font,
      transition: "all 0.2s",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      width: 18,
      textAlign: "center"
    }
  }, item.icon), sidebar && item.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 6px 12px",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, sidebar && isAdm && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: theme.sidebarText,
      opacity: 0.5,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      padding: "0 5px",
      marginBottom: 4
    }
  }, "Theme"), Object.entries(THEMES).map(([k, t]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setThemeKey(k),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      padding: "6px 7px",
      borderRadius: 8,
      border: "none",
      background: themeKey === k ? "rgba(255,255,255,0.13)" : "transparent",
      color: themeKey === k ? "white" : theme.sidebarText,
      fontSize: 11,
      cursor: "pointer",
      fontFamily: theme.font
    }
  }, /*#__PURE__*/React.createElement("span", null, t.icon), /*#__PURE__*/React.createElement("span", null, t.industry)))), /*#__PURE__*/React.createElement("button", {
    onClick: logout,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      width: "100%",
      padding: "9px 9px",
      borderRadius: 9,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      color: "white",
      fontSize: 11,
      cursor: "pointer",
      fontFamily: theme.font,
      justifyContent: sidebar ? "flex-start" : "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u21AA"), sidebar && "Sign Out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "11px 22px",
      background: theme.bgCard,
      borderBottom: `1px solid ${theme.primary}06`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: theme.textMuted
    }
  }, theme.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setNotifs(!notifs),
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      border: `1px solid ${theme.primary}10`,
      background: "transparent",
      cursor: "pointer",
      fontSize: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, "\u{1F514}", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 5,
      right: 5,
      width: 6,
      height: 6,
      borderRadius: 3,
      background: theme.warning
    }
  })), notifs && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 42,
      width: 300,
      background: theme.bgCard,
      borderRadius: 14,
      boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
      border: `1px solid ${theme.primary}06`,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderBottom: `1px solid ${theme.primary}06`,
      fontSize: 13,
      fontWeight: 700,
      color: theme.text
    }
  }, "Notifications"), [["Earned 'Mindful Leader' badge!", "2h", true], ["New lesson available", "5h", true], ["Session tomorrow at 2 PM", "1d", false], ["7-day streak! \u{1F525}", "1d", false]].map(([m, t, u], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "9px 14px",
      borderBottom: `1px solid ${theme.primary}04`,
      background: u ? `${theme.primary}03` : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: theme.text
    }
  }, m), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: theme.textMuted,
      marginTop: 2
    }
  }, t, " ago"))))), /*#__PURE__*/React.createElement("div", {
    onClick: () => nav("settings"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "4px 10px 4px 4px",
      borderRadius: 11,
      background: `${theme.primary}05`,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: theme.gradient,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      fontWeight: 700
    }
  }, user.avatar), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: theme.text
    }
  }, user.firstName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: theme.textMuted,
      textTransform: "capitalize"
    }
  }, user.role))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 22
    },
    onClick: () => setNotifs(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1060,
      margin: "0 auto",
      opacity: anim ? 0 : 1,
      transform: anim ? "translateY(6px)" : "none",
      transition: "all 0.3s ease"
    }
  }, renderView())))));
};
