import os, requests, json
from dotenv import load_dotenv


load_dotenv()
NASA_NEO = "https://api.nasa.gov/neo/rest/v1"

def fetch_near_objects(start_date=None, end_date=None):
    if not start_date or not end_date :
        print(f"Date not provided")
        return []

    api_key = os.getenv("NASA_NEO_API")
    if not api_key: 
        raise ValueError("NASA API key not reachable")
    url = f"{NASA_NEO}/feed"
    params = {
        "start_date" : start_date,
        "end_date" : end_date,
        "api_key" : api_key
    }

    try : 
        
        response = requests.get(url, params=params)
        response.raise_for_status
        data = response.json()
        results=[]
        for neo_list in data['near_earth_objects'].values():
            for neo in neo_list:
                results.append({
                    'name': neo['name'],
                    'size': round(float(neo['estimated_diameter']['meters']['estimated_diameter_max'])),
                    'distance': round(float(neo['close_approach_data'][0]['miss_distance']['kilometers'])),
                    'speed': round(float(neo['close_approach_data'][0]['relative_velocity']['kilometers_per_second'])),
                    'isHazardous': neo['is_potentially_hazardous_asteroid']
                })
        
        return results

        
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from NASA API : {e}. Using fallback data.")
        try:
            with open('./fallback_neo_data.json', 'r') as f:
                fallback_data = json.load(f)
            return fallback_data
        except FileNotFoundError:
            print("Cannot locate fallback data")
            return []
        

def fetch_sentry_data():
    """Asteroid data using sentry API"""
    SENTRY_URL = "https://ssd-api.jpl.nasa.gov/sentry.api"
    params = {"show-removed": "false"}

    try:
        response = response.get(SENTRY_URL, params = params)
        response.raise_for_status()
        data = response.json()

        return data
    except response.exceptions.RequestException:
        print("Error Fetching data")
        return []