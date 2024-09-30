# app.py
from flask import Flask, request, jsonify
import pickle
import pandas as pd
import joblib
from flask_cors import CORS
import university_data
import numpy as np

app = Flask(__name__)
CORS(app)

# Load your trained machine learning model
try:
    model1 = joblib.load("model1.pkl")
    print(f"Model loaded: {model1 is not None}")
except Exception as e:
    print(f"Error loading model: {e}")
    model1 = None
try:
    model2 = joblib.load("model2.pkl")
    print(f"Model loaded: {model2 is not None}")
except Exception as e:
    print(f"Error loading model: {e}")
    model2 = None


@app.route("/predict", methods=["POST"])
def predict():
    if model1 == None:
        return jsonify({"error": "Model is not loaded"})
    if model1 == None:
        return jsonify({"error": "Model is not loaded"})

    try:
        data = request.get_json()
        print(f"Received data: {data}")
        university = data["university"]
        school = data["school"]
        degree = data["degree"]

        # Prepare the input data for your model
        input_data = pd.DataFrame(
            {"university": [university], "school": [school], "degree": [degree]}
        )

        # Make a prediction using your model
        university_mapping = university_data.get_university_mapping()
        school_mapping = university_data.get_school_mapping()
        degree_mapping = university_data.get_degree_mapping()

        input_data["university"] = input_data["university"].map(university_mapping)
        input_data["school"] = input_data["school"].map(school_mapping)
        input_data["degree"] = input_data["degree"].map(degree_mapping)

        print(input_data)

        prediction1 = model1.predict(input_data)
        prediction2 = model2.predict(input_data)

        print(f"Prediction type: {type(prediction1)}")
        print(f"Prediction value: {prediction1}")
        # print(f"Prediction type: {type(prediction2)}")
        print(f"Prediction value: {prediction2}")

        if isinstance(prediction1, np.ndarray):
            employment_rate = prediction1[0]  # For numpy array
        else:
            employment_rate = prediction1.values[0]  # For pandas Series
        if isinstance(prediction2, np.ndarray):
            yearly_basic_salary = prediction2[0]  # For numpy array
        else:
            yearly_basic_salary = prediction2.values[0]  # For pandas Series

        response = {
            "employment_rate": employment_rate,
            "yearly_basic_salary": yearly_basic_salary,
        }
        print(f"Response: {response}")

        return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
