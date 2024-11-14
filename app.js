const apiKey = "e033904c25a7c505bc0eb39f55b7a903";

async function getWeather() {
  const city = document.getElementById("city-input").value;
  const weatherDisplay = document.getElementById("weather-display");

  // Clear previous results
  weatherDisplay.innerHTML = "";

  if (city) {
    try {
      // Fetch weather data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      // Extract relevant data
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const location = `${data.name}, ${data.sys.country}`;

      // Display the data
      weatherDisplay.innerHTML = `
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Description:</strong> ${description}</p>
            `;
    } catch (error) {
      weatherDisplay.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  } else {
    weatherDisplay.innerHTML =
      '<p style="color:blue;">Please enter a city name.</p>';
  }
}
