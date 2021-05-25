import React from 'react';

function Greeting(){
      let greetingTime = new Date().getHours();
      let greetingHr = greetingTime % 12;
      let greetingMin = new Date().getMinutes();
      let greetingPart = '';
      let period = '';
      const cssStyle = {}
        if(greetingTime >= 1 && greetingTime <= 11){
          greetingPart = "Good Morning";
        period = "AM";
        }
        else if(greetingTime >= 12 && greetingTime <= 19){
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
              <p className = "todo__date">{greetingHr}:{greetingMin} {period}</p>
    </>
    
      );


}

export default Greeting;