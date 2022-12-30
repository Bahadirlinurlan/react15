import React, { useEffect, useState } from 'react'
import './timer.css'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    
    
    var timer;

    useEffect(()=>{
   
        timer= setInterval(() =>{

        
            setSeconds(seconds + 1);

          if(seconds===59){
   
            setMinutes(minutes + 1);
            setSeconds(0);
}


},1000) 

return ()=> clearInterval(timer);

});

const start=()=>{
}

const stop=()=>{
clearInterval(timer);

}

const reset=()=>{

}




  return (
    <div className='Timer'>
        <div className='container'>

            <div className='Timer__container'>

          <div className='timer__metn'>

          <h1>Timer</h1>
          
          <h1>{minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds: seconds} </h1>
          <button className='Start'>Start</button>
          <button className='Stop'>Stop</button>
          <button className='Reset'>Reset</button>

          </div>

          </div>

          </div>
    </div>
  )
}

export default Timer