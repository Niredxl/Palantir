from flask import Flask, jsonify, request
from flask_cors import CORS
from neo_requests import fetch_near_objects


app = Flask(__name__)
CORS(app)
app.debug = True

@app.route('/')
def index():
    return "Palantir Backend server" 

@app.route("/api/neo", methods = ["GET"])
def get_asteroids():
    start_date = request.args.get("start_date", "2025-10-01")
    end_date = request.args.get("end_date", "2025-10-02")

    try: 
        asteroids = fetch_near_objects(start_date = start_date, end_date = end_date)
        return jsonify(asteroids)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/app/sentry", methods=["GET"])
def get_data():
    start_date = request.args.get("start_date", "2025-10-01")
    end_date = request.args.get("end_date", "2025-10-02")
    try: 
        asteroids = fetch_near_objects(start_date = start_date, end_date = end_date)
        return jsonify(asteroids)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(port=5000)