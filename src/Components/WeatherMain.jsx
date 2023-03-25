import React from 'react';
import { useSelector } from 'react-redux';
import  '../Styles/WeatherMain.scss'

import WeatherSearch from './WeatherSearch';



//Componente principal de la APP 
const WeatherMain = () => {


const {Main,city,wind,Weather,forecast} = useSelector((state) => state.weather)




 return (


        <div data-testid='weather-main'  className='Container'>
 {/* eslint-disable */}
{Weather == false?(
        <><WeatherSearch></WeatherSearch><h1 className='message'>Please search city</h1></>
):(
  

                                 <><WeatherSearch></WeatherSearch><section className='MainCard'>


                                         <img data-testid="weather-icon"  src={`http://openweathermap.org/img/wn/${Weather.icon}.png`} alt='weatherIcon'></img>

                                         <h1>{Main.temp}ºC</h1>

                                         <h2>{Weather.main}</h2>

                                         <p>{Weather.description}</p>

                                         <h5><i className='bi bi-geo-alt'></i>{city.name} {city.country} </h5>




                                 </section><div className='CardContainer'>



                                                 <section className='ForecastContainer'>

                                                         {forecast.map((fore, index) => (
                                                                 <div className='Forecast' key={index}>
                                                                         <h3>{fore.main.temp - 1}.C<img src={`http://openweathermap.org/img/wn/${fore.weather[0].icon}.png`} alt='Icon'></img></h3>
                                                                         <p>{fore.weather[0].main}</p>
                                                                         <p>{fore.dt_txt}</p>
                                                                 </div>
                                                         ))}
                                                 </section>



                                                 <section className='CardHumidity'>
                                                         <p>Humidity</p>
                                                         <h1>{Main.humidity}%</h1>
                                                 </section>

                                                 <section className='CardPressure'>
                                                         <p>Air pressure</p>
                                                         <h1>{Main.pressure} mb</h1>

                                                 </section>




                                                 <section className='CardTemp'>

                                                         <h1>Temperature</h1>
                                                         <p>max: {Main.temp_max}ºC</p>
                                                         <p>min: {Main.temp_min}ºC</p>

                                                 </section>

                                                 <section className='CardSpeed'>


                                                         <p>Wind Speed</p>

                                                         <h1> {wind.speed} m/s</h1>

                                                 </section>

                                         </div></>



      
)}


        </div>
    );
}


export default WeatherMain;
