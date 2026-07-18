from sqlalchemy import Column, Integer, String, Text

from database import Base


class Feedback(Base):
    __tablename__ = "feedbacks"

    id = Column(Integer, primary_key=True, index=True)

    submissionId = Column(String, unique=True, nullable=False)
    internName = Column(String, nullable=False)
    week = Column(String, nullable=False)
    task = Column(String, nullable=False)
    rating = Column(Integer, nullable=False)

    strengths = Column(Text)
    improvements = Column(Text)
    comments = Column(Text)

    status = Column(String, default="Pending")