document.getElementById("predictionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = isNaN(value) ? value : Number(value);
    });

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            document.getElementById("predictedRevenue").textContent = result.predicted_revenue;
        })
        .catch(() => {
            document.getElementById("predictedRevenue").textContent = "❌ Prediction failed.";
        });
});
