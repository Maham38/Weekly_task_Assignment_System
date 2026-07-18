from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import crud

from database import engine, SessionLocal

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="SafeX Feedback API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {"message": "SafeX Backend Running Successfully"}


@app.get("/feedback", response_model=list[schemas.Feedback])
def get_feedbacks(db: Session = Depends(get_db)):
    return crud.get_feedbacks(db)


@app.post("/feedback", response_model=schemas.Feedback)
def create_feedback(
    feedback: schemas.FeedbackCreate,
    db: Session = Depends(get_db)
):
    return crud.create_feedback(db, feedback)


@app.delete("/feedback/{feedback_id}")
def delete_feedback(
    feedback_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_feedback(db, feedback_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Feedback not found")

    return {"message": "Feedback deleted successfully"}
@app.put("/feedback/{feedback_id}", response_model=schemas.Feedback)
def update_feedback_status(
    feedback_id: int,
    data: schemas.StatusUpdate,
    db: Session = Depends(get_db),
):
    feedback = crud.update_feedback_status(
        db,
        feedback_id,
        data.status,
    )

    if feedback is None:
        raise HTTPException(
            status_code=404,
            detail="Feedback not found",
        )

    return feedback