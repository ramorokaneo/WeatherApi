import React, { useState } from 'react'
import './Weather.css';
import search from "../Assets/search.png";
import cloudy from "../Assets/cloudy.png";
import wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png";
import snow from "../Assets/snow.png";
import storm from "../Assets/storm (2).png";
import sun from "../Assets/sun (1).png";
import drizzle from "../Assets/drizzle (1).png";
import clear from "../Assets/clear-sky.png";
import mist from "../Assets/mist.png";
import rain from "../Assets/partly-cloudy.png";



const Weather = () => {

  let api_key = "867e3d508926f295325cf272a95e9001";

  const [wicon,setWicon] = useState(cloudy)

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value==="")
    {
      return 0;
    } 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-prcent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");


    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = data.wind.speed+" km/h";
    temprature[0].innerHTML = data.main.temp+" degrees";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d"  || data.weather[0].icon==="01n")
    {
      setWicon(clear);
    }
   else if(data.weather[0].icon==="02d"  || data.weather[0].icon==="02n")
    {
      setWicon(cloudy);
    }
    else if(data.weather[0].icon==="03d"  || data.weather[0].icon==="03n")
    {
      setWicon(wind);
    }
    else if(data.weather[0].icon==="04d"  || data.weather[0].icon==="04n")
    {
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==="05d"  || data.weather[0].icon==="05n")
    {
      setWicon(rain);
    }
    else if(data.weather[0].icon==="06d"  || data.weather[0].icon==="06n")
    {
      setWicon(storm);
    }
    else if(data.weather[0].icon==="07d"  || data.weather[0].icon==="07n")
    {
      setWicon(snow);
    }
    else if(data.weather[0].icon==="09d"  || data.weather[0].icon==="09n")
    {
      setWicon(sun);
    }
    else if(data.weather[0].icon==="13d"  || data.weather[0].icon==="13n")
    {
      setWicon(cloudy);
    }
    else
    {
      setWicon(clear);
    }

  }


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
        <div className="weather-location">London</div>
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