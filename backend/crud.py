from sqlalchemy.orm import Session
import models
import schemas


def get_feedbacks(db: Session):
    return db.query(models.Feedback).all()


def create_feedback(db: Session, feedback: schemas.FeedbackCreate):

    db_feedback = models.Feedback(
        submissionId=feedback.submissionId,
        internName=feedback.internName,
        week=feedback.week,
        task=feedback.task,
        rating=feedback.rating,
        strengths=feedback.strengths,
        improvements=feedback.improvements,
        comments=feedback.comments,
        status="Pending",
    )

    db.add(db_feedback)
    db.commit()
    db.refresh(db_feedback)

    return db_feedback


def delete_feedback(db: Session, feedback_id: int):

    feedback = (
        db.query(models.Feedback)
        .filter(models.Feedback.id == feedback_id)
        .first()
    )

    if feedback:
        db.delete(feedback)
        db.commit()
        return True

    return False


def update_feedback_status(db: Session, feedback_id: int, status: str):

    feedback = (
        db.query(models.Feedback)
        .filter(models.Feedback.id == feedback_id)
        .first()
    )

    if feedback is None:
        return None

    feedback.status = status

    db.commit()
    db.refresh(feedback)

    return feedback