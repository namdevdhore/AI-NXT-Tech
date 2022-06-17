import { useState } from "react";
export default function  Location () {
    const [load, setLoad] = useState(null)
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
  
    function getLocation() {
        setLoad(false)

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
    function showPosition(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setLoad(true);
    }

    return(
        <>
        <div style={{border:"20px", pading:"20px", margin:"20px"}}>
            <div style={{fotSize:"15px"}}>Get Location</div>
            <be/>
            <button onClick={getLocation} style={{backgroundColor:"blueviolet", margin:"20px"}}>Get coordinates</button>
            {load===false?<div>Getting coordinates</div>:''}
            {load===true? <div><h4> latitude: {latitude}</h4><h4>longitude: {longitude}</h4>
            </div>:''}
           
        </div>
        
        </>
    )
}

