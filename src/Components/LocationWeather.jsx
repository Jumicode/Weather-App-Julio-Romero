
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCity, setForecast, setMain, setWeather, setWind } from '../features/wheater/WeatherSlice';
import axios from 'axios';

const LocationWeather = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bf198ed79d99f2837e93d584c7884149&units=metric`;
        
        const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=bf198ed79d99f2837e93d584c7884149&units=metric&cnt=5`;
        
        axios.all([
          axios.get(currentWeatherApi),
          axios.get(forecastApi)
        ])
        .then(axios.spread((currentWeatherResponse, forecastResponse) => {
          const currentWeatherData = currentWeatherResponse.data;
          const forecastData = forecastResponse.data;

          dispatch(setCity({ name: currentWeatherData.name, country: currentWeatherData.sys.country }));
          dispatch(setWeather(currentWeatherData.weather[0]));
          dispatch(setMain(currentWeatherData.main));
          dispatch(setWind(currentWeatherData.wind));
          dispatch(setForecast(forecastData.list));
        }))
        .catch((error) => {
          console.error('Error fetching location weather and forecast:', error);
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, [dispatch]);


};

export default LocationWeather;
