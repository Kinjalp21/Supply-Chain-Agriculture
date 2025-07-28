from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd

app = Flask(__name__)
model = joblib.load('models/supply_chain_model.pkl')  # Load the saved pipeline

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print("Received data:", data)

    # Ensure dataframe matches training features
    input_df = pd.DataFrame([data])
    prediction = model.predict(input_df)[0]

    return jsonify({'predicted_revenue': round(prediction, 2)})

if __name__ == '__main__':
    app.run(debug=True)
