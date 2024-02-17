import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const StopWatch = () => {
  const [timePassedInMilliSeconds, setTimePassed] = useState(0);
  
  const timer = useRef(null);
  
  const start = () => {
    if (!timer.current) {
      let startTime = Date.now();
      timer.current = setInterval(() => {
        const stopTime = Date.now();
        setTimePassed(timePassedInMilliSeconds => stopTime - startTime + timePassedInMilliSeconds);
        
        startTime = stopTime;
      }, 250); 
    }
  };
  
  const stop = () => {
    window.clearInterval(timer.current);
    timer.current = null;
  };
  
  const reset = () => {
    stop();
    setTimePassed(0);
  };

  return (
    <div>
      <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
        {Math.floor(timePassedInMilliSeconds / 1000)} s
      </h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mr-2" onClick={start}>
          start
        </button>
        <button className="btn btn-outline-danger mr-2" onClick={stop}>
          stop
        </button>
        <button className="btn btn-outline-warning" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  )
}


export default StopWatch;