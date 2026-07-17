from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date

class SubmissionCreate(BaseModel):
    intern_name: str
    task_id: str
    work_link: str
    notes: Optional[str] = ""

class SubmissionOut(BaseModel):
    id: int
    intern_name: str
    task_id: str
    work_link: str
    notes: str
    status: str
    submitted_at: datetime

    class Config:
        from_attributes = True

class TaskStatusOut(BaseModel):
    task_id: int
    title: str
    intern_name: str
    due_date: date
    status: str
    submitted_at: Optional[datetime]
    work_link: Optional[str]