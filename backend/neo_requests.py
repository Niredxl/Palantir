import os, requests, json


NASA_NEO = "https://api.nasa.gov/neo/rest/v1"

def fetch_near_objects(start_date=None, end_date=None):
    if start_date or end_date == None :
        print(f"Date not provided")
        return []

    api_key = os.getenv("NASA_NEO_API")
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