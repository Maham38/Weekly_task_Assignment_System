from sqlalchemy import (
    Column,
    BigInteger,
    Integer,
    String,
    Text,
    Boolean,
    Date,
    DateTime,
    ForeignKey
)

from database import Base



class AssignedTask(Base):

    __tablename__ = "assigned_tasks"


    id = Column(BigInteger, primary_key=True)

    title = Column(String(200))

    description = Column(Text)

    assignee_type = Column(String(20))

    assignee_name = Column(String(120))

    week = Column(String(30))

    due_date = Column(Date)

    status = Column(String(30))





class WorkSubmission(Base):

    __tablename__="work_submissions"


    id = Column(BigInteger, primary_key=True)

    intern_name = Column(String(120))

    task_id = Column(
        BigInteger,
        ForeignKey("assigned_tasks.id")
    )

    work_link = Column(Text)

    notes = Column(Text)

    status = Column(String(30))

    submitted_at = Column(DateTime)





class Evaluation(Base):

    __tablename__="evaluations"


    id = Column(BigInteger,primary_key=True)

    submission_id = Column(
        BigInteger,
        ForeignKey("work_submissions.id")
    )

    evaluator = Column(String(120))

    score = Column(Integer)

    comments = Column(Text)

    rubric = Column(Text)





class Feedback(Base):

    __tablename__="structured_feedback"


    id = Column(BigInteger,primary_key=True)

    submission_id = Column(BigInteger)

    week = Column(Integer)

    strengths = Column(Text)

    improvements = Column(Text)

    next_steps = Column(Text)

    rating = Column(Integer)





class Certificate(Base):

    __tablename__="certificates"


    id = Column(BigInteger,primary_key=True)

    intern_name = Column(String(120))

    certificate_code = Column(String(50))

    issued_at = Column(DateTime)





class Leaderboard(Base):

    __tablename__="leaderboard_rankings"


    id = Column(BigInteger,primary_key=True)

    name = Column(String(120))

    entity_type = Column(String(20))

    score = Column(Integer)

    completion_rate = Column(Integer)





class HRStatus(Base):

    __tablename__="hr_dashboard_status"


    id = Column(BigInteger,primary_key=True)

    intern_name = Column(String(120))

    group_name = Column(String(120))

    task_title = Column(String(200))

    status = Column(String(30))

    score = Column(Integer)

    due_date = Column(Date)