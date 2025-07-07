import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const[time,setTime] = useState(0);
     const[running,setRunning]= useState(false);

      useEffect(()=>{

         let interval;

          if(running){
             interval = setInterval(()=>{
                setTime((prevTime)=> prevTime+1);
             },1000);
          }
          return ()=> clearInterval(interval);

        },[running]);

    const formatTime = (timeInSecond) =>{
         const hours = Math.floor(timeInSecond/3600);
         const minutes = Math.floor((timeInSecond % 3600)/60);
         const seconds = timeInSecond % 60;

         return[
            hours.toString().padStart(2,'0'),
            minutes.toString().padStart(2,'0'),
            seconds.toString().padStart(2,'0'),
         ].join(":");
    }

    const handleStart = () =>{
             setRunning(true);
    }
    const handleStop = () =>{
             setRunning(false);
    }
    const handleReset = () =>{
            setRunning(false);
            setTime(0);
    }

  return (
    <>
     <div className="app">
         <h1>Stopwatch</h1>
         <div className="timer">{formatTime(time)}</div>
         <div className="buttons">
             <button onClick={handleStart}>Start</button>
             <button onClick={handleStop}>Stop</button>
             <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App
