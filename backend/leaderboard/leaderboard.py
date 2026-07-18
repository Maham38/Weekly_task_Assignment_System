from flask import Blueprint, jsonify
from database import get_connection

leaderboard_bp = Blueprint("leaderboard", __name__)

@leaderboard_bp.route("/leaderboard", methods=["GET"])
def leaderboard():

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            ROW_NUMBER() OVER (ORDER BY score DESC) AS rank,
            name,
            entity_type,
            score,
            completion_rate
        FROM leaderboard_rankings
        ORDER BY score DESC;
    """)

    rows = cur.fetchall()

    leaderboard = []

    for row in rows:
        leaderboard.append({
            "rank": row[0],
            "name": row[1],
            "group": row[2],
            "score": row[3],
            "tasks": row[4]
        })

    cur.close()
    conn.close()

    return jsonify(leaderboard)