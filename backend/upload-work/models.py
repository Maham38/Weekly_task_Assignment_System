from sqlalchemy import Column, Integer, String, Text, DateTime, Date
from database import Base

class Submission(Base):
    __tablename__ = "work_submissions"
    id = Column(Integer, primary_key=True, index=True)
    intern_name = Column(String, nullable=False)
    task_id = Column(String, nullable=False)
    work_link = Column(Text, nullable=False)
    notes = Column(Text, nullable=False, default="")
    status = Column(String, nullable=False, default="Submitted")
    submitted_at = Column(DateTime, nullable=False)

class Task(Base):
    __tablename__ = "assigned_tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(Text)
    assignee_type = Column(String)
    assignee_name = Column(String)
    week = Column(String)
    due_date = Column(Date)
    status = Column(String)