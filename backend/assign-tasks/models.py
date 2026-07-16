from datetime import date
from sqlalchemy import String, Text, Date
from sqlalchemy.orm import Mapped, mapped_column
from database import Base
class Task(Base):
    __tablename__ = "assigned_tasks"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(200))
    description: Mapped[str] = mapped_column(Text)
    assignee_type: Mapped[str] = mapped_column(String(20))
    assignee_name: Mapped[str] = mapped_column(String(120))
    week: Mapped[str] = mapped_column(String(30))
    due_date: Mapped[date] = mapped_column(Date)
    status: Mapped[str] = mapped_column(String(30), default="Assigned")
