import { useReactMediaRecorder } from "react-media-recorder";
import './App.css';
import { useState } from "react";
import Location from "./Component/Location";
import Networks from "./Component/Network";
function App() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });


  return (
    <>
    
    <div className="App">
      <Networks/>
      <Location/>
      <div>

        <br/>
        <video src={mediaBlobUrl} controls autoPlay loop /><br/>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
      </div>
      
    </div>
    </>
    
  );
}

export default App;
