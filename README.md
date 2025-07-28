# 🚜 Supply Chain Management for Agriculture using AI

This project aims to enhance agricultural supply chain efficiency using Artificial Intelligence and data-driven approaches. It focuses on optimizing crop movement from farms to markets by predicting demand, clustering production zones, and recommending optimal logistics routes.

## 📌 Project Overview

Traditional agricultural supply chains in India suffer from inefficiencies due to lack of visibility, poor forecasting, and logistical challenges. This AI-powered tool helps:

- Predict demand based on historical trends and weather.
- Optimize crop flow through clustering and routing.
- Provide actionable insights via a web-based dashboard.

<img width="1514" height="865" alt="Screenshot 2025-04-06 221722" src="https://github.com/user-attachments/assets/fd5592ae-2670-49da-a5a8-a9365d2368c4" />


## 🌾 Features

- 🔍 Demand prediction using ML (Linear Regression).
- 📦 Supply clustering using KMeans.
- 🚛 Route optimization suggestions.
- 📊 Interactive dashboard for stakeholders.
- 📁 Easy data input via web interface.

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (Flask)
- **ML Libraries**: Scikit-learn, Pandas, NumPy
- **Database**: SQLite
- **Visualization**: Chart.js, Plotly

## 📈 How It Works

1. **Data Collection**: Crop yield, weather, storage, transportation, market prices.
2. **Preprocessing**: Cleaning, encoding, feature engineering.
3. **Modeling**:
   - Clustering production zones using KMeans.
   - Forecasting demand using regression models.
4. **Optimization**:
   - Suggests shortest or cost-efficient routes.
   - Predicts potential bottlenecks.

## 🖥️ Installation

```bash
git clone https://github.com/your-username/agri-supply-chain-ai.git
cd agri-supply-chain-ai
pip install -r requirements.txt
python app.py
