#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# LMS Platform — One-Command Deploy Script
# Run this on your local machine after downloading the tar.gz
# ═══════════════════════════════════════════════════════════════

set -e

echo ""
echo "🚀 LMS Platform Deployment"
echo "═══════════════════════════════════════"
echo ""

# Step 1: Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v git &> /dev/null; then
    echo "❌ git is not installed. Install it first: https://git-scm.com"
    exit 1
fi
echo "  ✅ git"

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Install it first: https://nodejs.org"
    exit 1
fi
echo "  ✅ node $(node -v)"

if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi
echo "  ✅ npm $(npm -v)"

# Step 2: Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install --production
echo "  ✅ Dependencies installed"

# Step 3: Test locally
echo ""
echo "🧪 Testing server..."
node -e "
const http = require('http');
const { spawn } = require('child_process');
const server = spawn('node', ['server.js'], { env: { ...process.env, PORT: '3099' } });
let ready = false;
server.stdout.on('data', d => {
  if (d.toString().includes('running') && !ready) {
    ready = true;
    fetch('http://localhost:3099/api/organizations')
      .then(r => r.json())
      .then(data => {
        console.log('  ✅ Server OK — ' + data.length + ' organizations');
        return fetch('http://localhost:3099/api/auth/login', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({email:'admin@mindwell.com',password:'admin123',orgSlug:'mindwell'})
        });
      })
      .then(r => r.json())
      .then(data => {
        console.log('  ✅ Auth OK — Logged in as ' + data.user.firstName + ' ' + data.user.lastName);
        server.kill();
        process.exit(0);
      })
      .catch(e => { console.log('  ❌ Test failed:', e.message); server.kill(); process.exit(1); });
  }
});
server.stderr.on('data', d => process.stderr.write(d));
setTimeout(() => { if (!ready) { console.log('  ❌ Server timeout'); server.kill(); process.exit(1); } }, 10000);
"
rm -f data/lms.db  # Clean test DB

# Step 4: Initialize git repo
echo ""
echo "📁 Setting up Git repository..."
if [ ! -d .git ]; then
    git init
    echo "node_modules/" > .gitignore
    echo "data/" >> .gitignore
    echo ".env" >> .gitignore
    git add -A
    git commit -m "🚀 LMS Platform - Production Ready

Full-stack white-label Learning Management System
- Express.js + SQLite backend with 20+ API endpoints
- React frontend with 3 industry themes
- JWT auth with role-based access (Admin/Manager/Learner)
- Course management, lesson player, expert sessions
- Achievements, certificates, analytics dashboard
- User management with invite system"
    echo "  ✅ Git repo initialized"
else
    echo "  ✅ Git repo already exists"
fi

# Step 5: Push to GitHub
echo ""
echo "═══════════════════════════════════════"
echo "📤 Ready to push to GitHub!"
echo "═══════════════════════════════════════"
echo ""
echo "Run ONE of these commands:"
echo ""
echo "  Option A — GitHub CLI (if you have 'gh' installed):"
echo "  ────────────────────────────────────────────────────"
echo "  gh repo create lms-platform --public --source=. --push"
echo ""
echo "  Option B — Manual (if you don't have 'gh'):"
echo "  ────────────────────────────────────────────"
echo "  1. Go to github.com/new"
echo "  2. Create repo named 'lms-platform'"
echo "  3. Run:"
echo "     git remote add origin https://github.com/YOUR_USERNAME/lms-platform.git"
echo "     git push -u origin main"
echo ""
echo "═══════════════════════════════════════"
echo "🌐 Then deploy (pick one):"
echo "═══════════════════════════════════════"
echo ""
echo "  Railway (recommended):"
echo "    → Go to railway.app → New Project → Deploy from GitHub"
echo "    → Select 'lms-platform' → Deploy"
echo "    → Live in ~90 seconds"
echo ""
echo "  Render (free tier):"
echo "    → Go to render.com → New Web Service"
echo "    → Connect repo → Build: npm install → Start: node server.js"
echo ""
echo "  Fly.io:"
echo "    → fly launch --name lms-platform && fly deploy"
echo ""
echo "═══════════════════════════════════════"
echo "🔑 Demo Accounts"
echo "═══════════════════════════════════════"
echo ""
echo "  ADMIN (full access):"
echo "    admin@mindwell.com    / admin123  (Wellness)"
echo "    admin@nursepath.com   / admin123  (Healthcare)"
echo "    admin@campuslearn.com / admin123  (Education)"
echo ""
echo "  LEARNER:"
echo "    alex@company.com      / learn123  (Wellness)"
echo "    maria@hospital.com    / learn123  (Healthcare)"
echo "    jordan@university.edu / learn123  (Education)"
echo ""
echo "  MANAGER:"
echo "    carol@company.com     / mgr123   (Wellness)"
echo ""
