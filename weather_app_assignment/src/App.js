import React,{ useState } from "react";
import './App.css';
import axios from "axios";
import Details from "./temp_details";
import Alert from "react";

function App() {
   const [city, setCity] = useState("");
   const [data, setData] = useState({
    // Weather_Details_of_the_city:0,
    // Current_Temperature:0,
    // Temperature_range:0,
    // Humidity:0,
    // SeaLevel:0,
    // GroundLevel:0
   })

   const handleClick = () =>{
   
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d620d00c136efd3b4d8985a72192982`)
      .then((res)=>{
        try{
        console.log(data);
        
        const celcius = res.data.main.temp - 273.15;
        setData({
          Weather_Details_of_the_city:"Weather_Details_of_the_city: " + res.data.name,
          Current_Temperature:" Current_Temperature: " + Math.round(celcius)+" °C",
          Temperature_range:"Temperature_range " + Math.round(res.data.main.temp_min - 273.15)+" °C" +" to "  + Math.round(res.data.main.temp_max - 273.15)+" °C",
          Humidity: "Humidity: " + res.data.main.humidity,
          SeaLevel:"SeaLevel: " + res.data.main.sea_level,
          GroundLevel: "GroundLevel: "+res.data.main.grnd_level,
        })
      }
      catch(err){
        Alert.alert("enter valid city name");
     }
      })
   
 
  }

  return (
   
    <div className="App">
       <h1>Weather App</h1><br></br>
       <div>
       <input type="text"  placeholder="Enter City Name" className="form-control" value={city} onChange={(e)=>{
         setCity(e.target.value);
       }}/>
       <button type="submit" onClick={handleClick}>Search</button>
    </div>
   
    <Details text={data}></Details>
    
    </div>
  );
}

export default App;
