# LMS Platform — Deploy Guide

## Tested & Working Full-Stack App
- ✅ Express.js backend with 20+ REST API endpoints
- ✅ SQLite database (auto-seeds with demo data)
- ✅ JWT authentication with role-based access
- ✅ React frontend with white-label theming
- ✅ 3 industry verticals, 18 courses, 11 users, 12 experts

---

## Option 1: Deploy to Railway (Easiest — 2 minutes)

1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **"New Project" → "Deploy from GitHub Repo"**
3. Push this code to a GitHub repo first:
   ```bash
   cd lms-deploy
   git init && git add -A && git commit -m "LMS Platform"
   gh repo create lms-platform --public --push
   ```
4. Select the repo in Railway → Deploy
5. Railway auto-detects Node.js, runs `npm install` and `npm start`
6. Your app is live at `https://lms-platform-xxxx.up.railway.app`

## Option 2: Deploy to Render (Free tier)

1. Go to [render.com](https://render.com) → New Web Service
2. Connect your GitHub repo
3. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node
4. Click Deploy — live in ~3 minutes

## Option 3: Deploy to Fly.io

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

cd lms-deploy
fly launch --name lms-platform
fly deploy
```

## Option 4: Deploy to a VPS (DigitalOcean, AWS EC2, etc.)

```bash
# On your server:
git clone <your-repo> && cd lms-deploy
npm install --production
PORT=3000 node server.js

# For production, use PM2:
npm install -g pm2
pm2 start server.js --name lms-platform
pm2 save && pm2 startup
```

## Option 5: Docker

```bash
# Add this Dockerfile to the project:
cat > Dockerfile << 'EOF'
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN mkdir -p data
EXPOSE 3000
CMD ["node", "server.js"]
EOF

docker build -t lms-platform .
docker run -p 3000:3000 -v lms-data:/app/data lms-platform
```

---

## Demo Accounts

| Role | Email | Password | Org |
|------|-------|----------|-----|
| Admin | admin@mindwell.com | admin123 | Wellness |
| Admin | admin@nursepath.com | admin123 | Healthcare |
| Admin | admin@campuslearn.com | admin123 | Education |
| Learner | alex@company.com | learn123 | Wellness |
| Learner | maria@hospital.com | learn123 | Healthcare |
| Learner | jordan@university.edu | learn123 | Education |
| Manager | carol@company.com | mgr123 | Wellness |

---

## API Endpoints

### Auth
- `POST /api/auth/login` — Login (returns JWT)
- `POST /api/auth/logout` — Logout
- `GET /api/auth/me` — Current user + org

### Courses
- `GET /api/courses` — List courses (filterable)
- `GET /api/courses/:id` — Course detail with modules/lessons
- `POST /api/courses/:id/enroll` — Enroll in course
- `POST /api/lessons/:id/complete` — Complete lesson (updates progress)
- `POST /api/courses` — Create course (Admin)

### Users
- `GET /api/users` — List org users (Admin)
- `POST /api/users/invite` — Invite users (Admin)
- `PUT /api/users/:id` — Update user role/status (Admin)

### Experts & Sessions
- `GET /api/experts` — List experts
- `POST /api/sessions` — Book session
- `GET /api/sessions` — My sessions

### Achievements
- `GET /api/achievements` — Points, badges, certs, leaderboard

### Analytics
- `GET /api/analytics` — Org-wide metrics (Admin)

### Settings
- `PUT /api/settings/profile` — Update profile
- `PUT /api/settings/password` — Change password

### Public
- `GET /api/organizations` — List all orgs (for login page)
