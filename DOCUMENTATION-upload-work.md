# Upload Work Module — Documentation

## What I Built

The Upload Work Module lets interns submit their weekly deliverable (a link to their work, plus optional notes) against a specific assigned task. It also shows each intern a live status view of every task assigned to them — whether it's still pending, already submitted, or late — computed automatically against the task's due date.

This module is one of 7 in Group 50's Weekly Task Assignment System, and connects directly to the shared `assigned_tasks` table (owned by the Assign Tasks module) and writes to the shared `work_submissions` table, which the Evaluation, Feedback, Leaderboard, and HR Dashboard modules also read from.

## How It Works

**Submitting work:**
1. Intern enters their name and the task ID they're submitting against.
2. They provide a work link (GitHub repo, Drive folder, deployed URL, etc.) and optional notes.
3. On submit, the backend looks up the task's due date from `assigned_tasks`, compares it against the current time, and stores the submission in `work_submissions` with a computed status (`Submitted` or `Late`).

**Checking status:**
1. The frontend calls `GET /submissions/status/{intern_name}` on load.
2. The backend fetches every task assigned to that intern, checks whether a submission exists for each, and computes status live: `Pending` (no submission, not yet due), `Submitted` (submitted on time), or `Late` (submitted past due, or nothing submitted and due date has passed).
3. Results render as a status table that updates automatically after every new submission.

## How to Run / View

See `README-upload-work.md` for full setup steps. Short version: run the FastAPI backend (`uvicorn main:app --reload`) and the React frontend (`npm run dev`) at the same time — the frontend calls the backend at `localhost:8000`.

## Challenges Faced

- The shared database schema changed mid-development (table names, column types, and structure were all updated by the team after initial testing), which required rebuilding the models, schema validation, and status logic to match the live schema instead of the original plan.
- The shared Neon database password was rotated by a teammate without notice, which broke every local connection until identified and fixed — highlighted the need for the team to communicate DB credential changes.
- `due_date` format and type changed during development (from a plain text field to a proper SQL date type), which changed how the "late" calculation needed to be written.

## What I Learned

- Building and testing a REST API end-to-end with FastAPI, SQLAlchemy, and a real hosted Postgres database (Neon), not just locally.
- Designing logic that computes state (task status) dynamically from live data instead of trusting a stored value that could go stale.
- Working against a schema owned and changed by teammates — writing code that's resilient to structure changes, and communicating clearly when shared resources (like a DB) break unexpectedly.