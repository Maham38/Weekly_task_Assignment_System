from datetime import date
from pydantic import BaseModel, ConfigDict
class TaskCreate(BaseModel):
    title: str; description: str; assignee_type: str; assignee_name: str; week: str; due_date: date
class TaskOut(TaskCreate):
    id: int; status: str
    model_config = ConfigDict(from_attributes=True)
