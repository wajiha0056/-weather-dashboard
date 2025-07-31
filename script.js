function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherHTML = `
                <p><strong>📍 City:</strong> ${data.name}, ${data.sys.country}</p>
                <p><strong>🌡️ Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>☁️ Weather:</strong> ${data.weather[0].main}</p>
                <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherHTML;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}