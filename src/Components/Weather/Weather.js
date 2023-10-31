import React from 'react'
import './Weather.css';
import search from "../Assets/search.png";
import cloudy from "../Assets/cloudy.png";
import wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png";


const Weather = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon">
                <img src={search} alt=""/>
            </div>
        </div>
        <div className="weather-image">
          <img src={cloudy} alt=''/>
        </div>
        <div className="weather-temp">24 degrees</div>
        <div className="weather-location">Johannesburg</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity} alt="" className="icon"/>
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather