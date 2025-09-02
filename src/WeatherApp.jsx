import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"WonderLand",
        description: "mist",
        feelsLike: 34.69,
        humidity: 79,
        temp: 29.06,
        tempMax:29.06,
        tempMin: 29.06,
    })
    let updateInfo=(results)=>{
    setWeatherInfo(results);
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Weather App by Delta</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}