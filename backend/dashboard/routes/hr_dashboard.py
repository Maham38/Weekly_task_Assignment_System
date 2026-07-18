from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from database import get_db

from models import (
    AssignedTask,
    WorkSubmission,
    Evaluation,
    Feedback,
    Certificate,
    Leaderboard,
    HRStatus
)


router = APIRouter(
    prefix="/hr-dashboard",
    tags=["HR Dashboard"]
)



@router.get("/")
def get_dashboard(
    db:Session=Depends(get_db)
):


    # TASK DATA

    total_tasks = db.query(
        AssignedTask
    ).count()



    task_status = db.query(
        AssignedTask.status,
        func.count(AssignedTask.id)
    ).group_by(
        AssignedTask.status
    ).all()



    # SUBMISSIONS

    total_submissions = db.query(
        WorkSubmission
    ).count()



    late_submissions = db.query(
        WorkSubmission
    ).filter(
        WorkSubmission.status=="Late"
    ).count()



    # EVALUATION

    total_evaluations = db.query(
        Evaluation
    ).count()



    average_score = db.query(
        func.avg(Evaluation.score)
    ).scalar()



    # FEEDBACK

    avg_rating = db.query(
        func.avg(Feedback.rating)
    ).scalar()



    # CERTIFICATES

    certificates = db.query(Certificate).count()



    # LEADERBOARD TOP 5

    leaderboard = db.query(
        Leaderboard
    ).order_by(
        Leaderboard.score.desc()
    ).limit(5).all()



    # Recent Activities

    recent = db.query(
        HRStatus
    ).order_by(
        HRStatus.id.desc()
    ).limit(10).all()



    return {


        "summary":{


            "total_tasks":total_tasks,


            "submissions":total_submissions,


            "late_submissions":late_submissions,


            "evaluations":total_evaluations,


            "average_score":
                round(average_score or 0,2),


            "feedback_rating":
                round(avg_rating or 0,2),


            "certificates":
                certificates

        },



        "task_status":[

            {
                "status":x[0],
                "count":x[1]
            }

            for x in task_status

        ],



        "leaderboard":[

            {
                "name":x.name,
                "type":x.entity_type,
                "score":x.score,
                "completion":x.completion_rate
            }

            for x in leaderboard

        ],



        "recent_activity":[

            {
                "intern":x.intern_name,
                "group":x.group_name,
                "task":x.task_title,
                "status":x.status,
                "score":x.score,
                "due_date":x.due_date

            }

            for x in recent

        ]

    }