"use strict";

const weatherApp = {
	init() {
		document.getElementById("form").addEventListener("submit", function (e) {
			e.preventDefault();
			console.log("submitted");
			const cityName = document.getElementById("search").value;
			weatherApp.fetchWeatherData(cityName);
		});
	},

	fetchWeatherData(city) {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				weatherApp.renderWeatherData(data);
			});
	},

	renderWeatherData(weatherData) {
		//Template
		console.log(weatherData);
		document.getElementById("weatherResult").insertAdjacentHTML(
			"beforeend",
			` <h2>Weather</h2>
    <ul>
      <li>Average tempature: ${weatherData.main.temp} °C</li>
      <li>Min tempature: ${weatherData.main.temp_min} °C</li>
      <li>Max tempature: ${weatherData.main.temp_max} °C</li>
      <li>Description: ${weatherData.weather[0].description}</li>
    </ul>`
		);
	},
};

weatherApp.init();
