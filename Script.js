const apiKey = 'your_api_key'; // Replace with your OpenWeatherMap API key

document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('temp').innerText = data.main.temp;
            document.getElementById('wind').innerText = data.wind.speed;
            document.getElementById('humidity-value').innerText = data.main.humidity;
            document.getElementById('description').innerText = data.weather[0].description;
        })
        .catch(error => {
            alert("City not found");
        });
}
