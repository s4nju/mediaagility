import React from 'react';
import './item-style.css'

export default function Item(props) {
    let {
        cityName,
        date,
        feelLike,
        humidity,
        pressure,
        currentTemp,
        maxTemp,
        minTemp,
        sunrise,
        sunset,
        windSpeed,
        clouds,
        icon,
        description
    } = props;
    date = new Date(date*1000).toLocaleTimeString();
    sunrise = new Date(sunrise*1000).toLocaleTimeString();
    sunset = new Date(sunset*1000).toLocaleTimeString();
    console.log(props.icon)
    return (
        <div className='item'>
            <div className='left-section'>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
                <p className='desc'>{description}</p>
                <p className='wind-speed'>{'Wind Speed - ' + windSpeed}</p>
            </div>
            <div className='middle-section'>
                <h3>{cityName}</h3>
                <h5>{'Feels Like - ' + (feelLike - 273.15).toFixed(0)}<>&deg;C</></h5>
                <h6>{'Min - ' + (minTemp - 273.15).toFixed(0) + ' Max - ' + (maxTemp - 273.15).toFixed(0)}</h6>
                <h3>{'Current Temp - ' + (currentTemp - 273.15).toFixed(0)}<>&deg;C</></h3>
            </div>
            <div className='right-section'>
                <p>{date.toString()}</p>
                <h6>{'Humidity ' + humidity}</h6>
                <h6>{'Pressure ' + pressure}</h6>
                <h4>{'Sunrise - ' + sunrise + ' Sunset - ' + sunset}</h4>
            </div>
        </div>
    )
}