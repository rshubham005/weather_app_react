import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Style.css';
function Weather() {
    let [temp,settemp]=useState(0)
    let [city,setcity]=useState('')
    let [weather,setwaether]=useState('')
    let [cityinput,setcityinput]=useState('Lucknow')
    let [wind,setwind]=useState('')
    let [humidity,sethumidity]=useState('')

    const Cityinputhandler=(e)=>
{
    setcityinput(e.target.value)
    console.log(cityinput)
}
    useEffect(()=>
    {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityinput}&units=metric&appid=fb4296b357e6798e71a0da94c63308bd`
        axios.get(url)
        .then(response =>{
            console.log(response.data.name)
            setcity(response.data.name)
            settemp(response.data.main.temp)
            sethumidity(response.data.main.humidity)
            setwaether(response.data.weather[0].main)
            setwind(response.data.wind.speed)
        })
        .catch(error=>
            {
                if(error)
                {
                    setcity("No data found!")
                    settemp()
                    setwaether()
                    setwind()
                    sethumidity()
                }
            })
    },[cityinput])
    return (
        <div className="weather">
            <div className="Mainbox">
                <h2 className="Cityname">Weather App !</h2>
                <input type="text" placeholder="Enter city name to check weather" value={cityinput} onChange={Cityinputhandler} className="cityinput"/>
                <h2 className="Cityname">{city}</h2>
                <h1 className="currenttemp">{temp}°C - {weather}</h1>
                <h3 className="wind">Humidity-{humidity}% || Windspeed-{wind}</h3>
            </div>
        </div>
    )
}

export default Weather
