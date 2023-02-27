import React,{ useState } from "react";


function Details({text}) {
    return (
        <div>
            <h3>{text.Weather_Details_of_the_city}</h3>
            <h3> {text. Current_Temperature}</h3>
            <h3> {text.Temperature_range}</h3>
            <h3> {text.Humidity}</h3>
            <h3> {text.SeaLevel}</h3>
            <h3> {text.GroundLevel}</h3>
           
        </div>
    )
}
export default Details;