async function fetchWeatherData(latitude, longitude) {
    const apiKey = 'YOUR_API_KEY'; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const iconCode = data.weather[0].icon;
        const condition = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;

        document.getElementById('icon').src = 'https://openweathermap.org/img/wn/${iconCode}.png';

        document.getElementById('temp').textContent = temp.toFixed(1);
        document.getElementById('condition').textContent = condition;
        document.getElementById('humidity').textContent = '${humidity}%';

    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}