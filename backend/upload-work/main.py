from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime
from typing import List

from database import get_db, engine, Base
import models
import schemas
from status_logic import compute_status

app = FastAPI(title="Upload Work Module API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/submissions", response_model=schemas.SubmissionOut)
def create_submission(payload: schemas.SubmissionCreate, db: Session = Depends(get_db)):
    task = db.query(models.Task).filter(models.Task.id == int(payload.task_id)).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found.")

    submitted_at = datetime.now()
    status = compute_status(task.due_date, submitted_at)

    submission = models.Submission(
        intern_name=payload.intern_name,
        task_id=payload.task_id,
        work_link=payload.work_link,
        notes=payload.notes or "",
        status=status,
        submitted_at=submitted_at,
    )
    db.add(submission)
    db.commit()
    db.refresh(submission)
    return submission


@app.get("/submissions", response_model=List[schemas.SubmissionOut])
def get_submissions(task_id: str | None = None, intern_name: str | None = None, db: Session = Depends(get_db)):
    query = db.query(models.Submission)
    if task_id:
        query = query.filter(models.Submission.task_id == task_id)
    if intern_name:
        query = query.filter(models.Submission.intern_name == intern_name)
    return query.all()


@app.get("/submissions/status/{intern_name}", response_model=List[schemas.TaskStatusOut])
def get_status_for_intern(intern_name: str, db: Session = Depends(get_db)):
    tasks = db.query(models.Task).filter(models.Task.assignee_name == intern_name).all()
    results = []

    for task in tasks:
        submission = (
            db.query(models.Submission)
            .filter(models.Submission.task_id == str(task.id), models.Submission.intern_name == intern_name)
            .first()
        )
        status = compute_status(task.due_date, submission.submitted_at if submission else None)

        results.append(schemas.TaskStatusOut(
            task_id=task.id,
            title=task.title,
            intern_name=intern_name,
            due_date=task.due_date,
            status=status,
            submitted_at=submission.submitted_at if submission else None,
            work_link=submission.work_link if submission else None,
        ))

    return results