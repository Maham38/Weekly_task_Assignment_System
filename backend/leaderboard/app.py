from flask import Flask
from flask_cors import CORS
from database import get_connection
from routes.leaderboard import leaderboard_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(leaderboard_bp)

@app.route("/")
def home():
    return {"message": "Leaderboard Backend is Running!"}


@app.route("/test-db")
def test_db():
    try:
        conn = get_connection()
        cur = conn.cursor()

        cur.execute("SELECT NOW();")
        result = cur.fetchone()

        cur.close()
        conn.close()

        return {
            "success": True,
            "server_time": str(result[0])
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


if __name__ == "__main__":
    app.run(debug=True)