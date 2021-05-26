import React, { useState } from 'react';

function Greeting(){
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);
  const updateTime = () =>{
  time = new Date().toLocaleTimeString();
  setTime(`${time}`)
  }
  setInterval(updateTime, 1000);  
  
  const colon = ":";
  let splitTime = time.split(colon);
  let period = splitTime[0];
  let greetingPart = ''
        if(period >= 1 && period <= 11){
          greetingPart = "Good Morning";
          period = "AM";
        }
        else if(period >= 12 && period <= 19){
          greetingPart = "Good Afternoon";
        period = "PM";
      }
      else{
        greetingPart = "Good Night";
        period = "PM";

      }

      return (
          <>
             <p className = "todo__detail">Your Daily Planner</p>
              <p className = "todo__greet">{greetingPart}, Sisam</p>
              <p className = "todo__date">{currentTime} {period}</p>
    </>
    
      );


}

export default Greeting;