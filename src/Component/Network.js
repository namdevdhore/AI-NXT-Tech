import { useState } from "react";
// import "./styles.css";

export default function Networks() {
  const [speed, setSpeed] = useState("");
  const [sta, setSta] = useState(null);
  const [fail, setFail] = useState(false);

  var imageAddr =
    "https://4k-uhd.nl/wp-content/uploads/2018/08/4K-3840x2160-Wallpaper-Uitzicht-5.jpg";
  var downloadSize = 5739426; //bytes

  function MeasureConnectionSpeed() {
    setSta(true);
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
      endTime = new Date().getTime();
      showResults();
    };

    download.onerror = function (err, msg) {
      setFail(true);
    };

    startTime = new Date().getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
      var duration = (endTime - startTime) / 1000;
      var bitsLoaded = downloadSize * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);
      var speedMbps = (speedKbps / 1024).toFixed(2);

      setSpeed(speedMbps + " Mbps");
      setSta(false);
    }
  }

  return (
    <div className="App" style={{border:"20px", pading:"20px", margin:"20px"}}>
      <button onClick={MeasureConnectionSpeed} style={{backgroundColor:"yellow"}}>
        Check your Internet speed
      </button>
      {sta === true ? <div style={{border:"20px", pading:"20px", margin:"20px", fontSize:"20px"}}>Calculating Speed ...</div> : ""}
      {sta === false ? <h1>Your download speed is: {speed}</h1> : ""}
      {fail === true ? <h1>Error in Calculating Speed</h1> : ""}
    </div>
  );
}
