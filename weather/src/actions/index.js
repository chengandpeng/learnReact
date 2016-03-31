import axios from 'axios';

const API_KEY = 'db146a2b79e6592b857de1b27df94b36';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
	let url = `${ROOT_URL}&q=${city},cn`;

	return {
		type: FETCH_WEATHER,
		payload: axios.get(url)
	};
}