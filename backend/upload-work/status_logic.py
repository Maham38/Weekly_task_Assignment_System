from datetime import datetime, date

def compute_status(due_date: date, submitted_at: datetime | None) -> str:
    today = date.today()
    if submitted_at is None:
        return "Late" if today > due_date else "Pending"
    return "Submitted" if submitted_at.date() <= due_date else "Late"