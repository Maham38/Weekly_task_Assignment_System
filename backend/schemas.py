from pydantic import BaseModel


class FeedbackCreate(BaseModel):
    submissionId: str
    internName: str
    week: str
    task: str
    rating: int
    strengths: str | None = None
    improvements: str | None = None
    comments: str | None = None


class Feedback(BaseModel):
    id: int
    submissionId: str
    internName: str
    week: str
    task: str
    rating: int
    strengths: str | None = None
    improvements: str | None = None
    comments: str | None = None
    status: str

    class Config:
        from_attributes = True


class StatusUpdate(BaseModel):
    status: str