import React from "react"
const Map=()=>{
      return(
        <div className="map">
            <div className="maps">
                <iframe src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
            </div>
            <div className="m-text">
                <p>THE BEST DEALS</p>
                <h1>Choose a location</h1>
                <BTN p="Downtown Miami"/>
                <BTN p="Chicago"/>
                <BTN p="Manhattan-New York"/>
                <BTN p="West Hollywood"/>
                <BTN p="Washington"/>
                <BTN p="Maryland"/>
                <BTN p="San Fransisco"/>
                <BTN p="Orange Country"/>
            </div>
        </div>
      )
    }
    export default Map;
 const BTN=(props)=>{
     return(
         <div className="line">
<input type="radio" name="" id=""/>
     <p>{props.p}</p>
         </div>
     )
 }