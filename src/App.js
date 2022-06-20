import { useReactMediaRecorder } from "react-media-recorder";
import './App.css';
import { useState, useEffect, useRef } from "react";
import Location from "./Component/Location";
import Networks from "./Component/Network";
function App() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  const [sat, setSat]=useState(false)
  let videoRef = useRef(null);
 
  let photoRef = useRef(null)
 
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
 
  const takePicture = () => {
    const width = 400
    const height = width / (16 / 9)
    
    let video = videoRef.current
 
    let photo = photoRef.current
 
    photo.width = width
 
    photo.height = height
 
    let ctx = photo.getContext('2d')
 
    ctx.drawImage(video, 0, 0, width, height)
    
  }
 
 
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const stop=()=>{
   setSat(true);
   stopRecording();
  }
  const star=() =>{
    setSat(false)
    startRecording();
  }

  return (
    <>
    
    <div className="App">
      <Networks/>
      <Location/>
      <div>

        <br/>
        <video ref={videoRef}></video><br/>
        {sat===true? (<><video src={mediaBlobUrl}  controls autoPlay loop  /><br/></>) :''}
       
        <button onClick={star}>Start Recording</button>
        <button onClick={stop} >Stop Recording</button>
        <button onClick={takePicture}>Take Picture</button><br/>
        <canvas  ref={photoRef}></canvas>
      </div>
      
    </div>
    </>
    
  );
}

export default App;
