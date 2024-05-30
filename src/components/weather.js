import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { fetchWeather } from '../slices/weatherSlice';
import '../styles/weather.css'

const Weather = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);

    const handleSearch = () => {
        dispatch(fetchWeather(city));
        setCity('')
    };

    return (
            <div className="weather-container">
                <h1>Weather App</h1>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                />
                <button onClick={handleSearch}>Search</button>

                {weather.status === 'loading' && <p>Loading...</p>}
                {weather.status === 'succeeded' && weather.data && (
                    <div className="weather-info">
                        <h2>{weather.data.name}</h2>
                        <p>Temperature: {weather.data.main.temp} °C</p>
                        <p>Weather: {weather.data.weather[0].description}</p>
                    </div>
                )}
                {weather.status === 'failed' && <p>{weather.error}</p>}
            </div>
    )
}

export default Weather
