import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Weather = () => {
	const navigate = useNavigate();
	const params = useParams();

	const [weather, setWeather] = useState({});
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		fetchWeather();
	}, [params]);

	const fetchWeather = async () => {
		try {
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${params.countryName}&APPID=794ee95e63c5a32aaf88cd813fa2e425`
			);

			const data = await response.data;
			console.log(data);
			setWeather(data);
		} catch (error) {
			setIsError(true);
		}
	};

	return (
		<>
			<h1>Weather of {params.countryName}</h1>
			{isError ? (
				<h2>Error Fetching the data for this country</h2>
			) : (
				Object.keys(weather).length > 0 && (
					<>
						<h2>Temperature: {weather.main.temp}</h2>
						<h2>Feels Like: {weather.main.feels_like}</h2>
						<h2>Humidity: {weather.main.humidity}</h2>
						<h2>Pressure: {weather.main.pressure}</h2>
						<h2>Wind Degree: {weather.wind.deg}</h2>
						<h2>Wind Speed: {weather.wind.speed}</h2>
						<h2>Wind Gust: {weather.wind.gust}</h2>
					</>
				)
			)}
			<button onClick={() => navigate("/")}>Home</button>
		</>
	);
};

export default Weather;
