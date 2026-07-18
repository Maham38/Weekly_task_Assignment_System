# Weekly Task Assignment System - HR Dashboard Module

##  Project Description

The **HR Dashboard Module** is part of the **Weekly Task Assignment System** developed for the SafeX Solutions internship project.

This module provides HR managers with a centralized dashboard to monitor intern activities, including assigned tasks, submissions, evaluations, certificates, and overall performance.

The dashboard collects data from different system modules and presents meaningful statistics to help HR track internship progress.

---

#  Features

### HR Dashboard

- View total number of interns
- View assigned tasks statistics
- Track completed and pending tasks
- Monitor submitted work
- View evaluation scores
- Track certificates issued
- View intern performance summary

### Dashboard Cards

The dashboard displays:

- 👥 Total Interns
- 📋 Assigned Tasks
- ✅ Completed Tasks
- ⏳ Pending Tasks
- 📤 Work Submissions
- ⭐ Average Evaluation Score
- 🏆 Certificates Issued

---

# Technologies Used

## Frontend

- React.js
- Vite
- Bootstrap 5
- Axios
- React Router DOM

## Backend

- FastAPI
- Python
- SQLAlchemy ORM
- PostgreSQL
- Neon PostgreSQL Database

## Development Tools

- Git
- GitHub
- VS Code


---



# Installation Guide

## Prerequisites

Before running this project, install:

- Python 3.10+
- Node.js 18+
- npm
- PostgreSQL database (Neon recommended)
- Git

Check versions:

```bash
python --version

node --version

npm --version
```

---

#  Backend Setup (FastAPI)

## Step 1: Navigate to Backend

Open terminal:

```bash
cd backend
```

---

## Step 2: Create Virtual Environment

Windows:

```bash
python -m venv .venv
```

---

## Step 3: Activate Virtual Environment

Windows:

```bash
.venv\Scripts\activate
```

Linux/Mac:

```bash
source .venv/bin/activate
```

After activation you should see:

```
(.venv)
```

---

## Step 4: Install Backend Dependencies

Run:

```bash
pip install -r requirements.txt
```

If requirements.txt does not exist:

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv
```

---

#  Backend Environment Setup

Inside the backend folder create:

```
.env
```

Add your Neon PostgreSQL connection string:

```env
DATABASE_URL=postgresql://username:password@host/database
```

Example:

```env
DATABASE_URL=postgresql://neondb_owner:password@ep-example.neon.tech/neondb
```

⚠️ Never upload `.env` file to GitHub.

---

#  Run Backend Server

Inside backend folder:

```bash
uvicorn main:app --reload
```

Successful output:

```
Uvicorn running on http://127.0.0.1:8000
```

---

## Backend API Documentation

Open browser:

```
http://127.0.0.1:8000/docs
```

FastAPI Swagger documentation will appear.

---

#  Frontend Setup (React)

Open a new terminal.

Navigate to frontend:

```bash
cd frontend
```

---

## Step 1: Install Dependencies

Run:

```bash
npm install
```

This installs:

- React
- Vite
- Bootstrap
- Axios
- React Router

---

## Step 2: Configure API URL

Inside frontend create:

```
.env
```

Add:

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

## Step 3: Start React Application

Run:

```bash
npm run dev
```

Output:

```
Local:
http://localhost:5173/
```

Open this URL in browser.

---

#  API Integration

Frontend communicates with FastAPI backend using REST APIs.

Example:

```
React Dashboard
        |
        |
        ↓
Axios Request
        |
        |
        ↓
FastAPI API
        |
        |
        ↓
Neon PostgreSQL Database
```

---


#  Module Integration

The HR Dashboard connects with:

| Module | Purpose |
|--------|---------|
| Assign Tasks | Shows assigned task statistics |
| Upload Work | Shows submission status |
| Evaluation | Displays intern scores |
| Certificate | Tracks certificates |
| Leaderboard | Shows rankings |

---



