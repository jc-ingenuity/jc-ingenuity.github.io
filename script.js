document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch weather data
    function fetchWeather() {
        // Example of using a weather API (replace with a real API key)
        const apiKey = 'YOUR_API_KEY';
        const city = 'London';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('location').textContent = `Location: ${data.name}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('condition').textContent = `Condition: ${data.weather[0].description}`;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Fetch weather data when the widget loads
    fetchWeather();
});
