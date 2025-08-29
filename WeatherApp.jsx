import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({ 
     city: "Delhi",     
     feelsLike: 36.15,
     humidity: 58,
     temp: 31.85,
     tempMax: 31.85,
     tempMin: 31.85,
     weather: "overcast clouds",
      
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{ textAlign: "center"}}>
            <h2>Weather App by Rana</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    );
}