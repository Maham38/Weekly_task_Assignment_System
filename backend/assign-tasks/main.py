from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, get_db
from models import Task
from schemas import TaskCreate, TaskOut
Base.metadata.create_all(bind=engine); app = FastAPI(title="SafeX Assign Tasks")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
@app.post("/tasks", response_model=TaskOut)
def create(item: TaskCreate, db: Session = Depends(get_db)):
    task = Task(**item.model_dump()); db.add(task); db.commit(); db.refresh(task); return task
@app.get("/tasks", response_model=list[TaskOut])
def list_tasks(db: Session = Depends(get_db)): return db.query(Task).order_by(Task.due_date).all()
@app.patch("/tasks/{task_id}/status", response_model=TaskOut)
def update_status(task_id: int, status: str, db: Session = Depends(get_db)):
    task = db.get(Task, task_id)
    if not task: raise HTTPException(404, "Task not found")
    task.status = status; db.commit(); db.refresh(task); return task
