import './../digitalclock.css';
import React ,{useState, useEffect} from 'react';

let date=new Date();
function App() {
  
  const [time,setTime]=useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000);
    return ()=>clearInterval(interval)
  },[]);

  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <hr></hr>
      <h1>{time}</h1>
    </div>
  );
}

export default App;
