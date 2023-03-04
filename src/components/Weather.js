import React from 'react';
import { useState, useEffect } from 'react';
import './../Weather.css';
const App=()=>{
  const[city, setCity]=useState(null);
  const [search, setSearch]=useState('pune');

  useEffect(()=>{
    const fetchapi=async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=137d235a92d197007295d39785ad7483`;
      const response= await fetch(url);
      const resJson=await response.json();
      console.log(resJson.main);
      setCity(resJson.main);
    };
    fetchapi();
  },[search]);

  return(
    <div className='main'>
        <input type='search' name='search'  id='search' onChange={(event)=>{setSearch(event.target.value);}}></input>
        <br></br>
        {!city ?(
          <h2>NOT FOUND</h2>):
          (
            <div className='result'>
                <p>
                  city:{search}
                </p>
                  <p>
                    temp:{city.temp}
                  </p>
                
                <p>
                    humidity:{city.humidity}
                </p>
                <p>
                  pressure:{city.pressure}
                </p>
                <p>
                  min_temp:{city.temp_min}
                </p>
                <p>
                  max_temp:{city.temp_max}
                </p>
            </div>
          )
        }

    </div>

  )
}

export default App;