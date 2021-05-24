import React, { useState } from "react";
import TodoList from "./TodoList"

const App = () => {

  const [inputList,setInputList] = useState("");
  const [item, setItem] = useState([]);
  const addList = (event) =>{
      setInputList (event.target.value);
  };

  const addedList = () =>{
      setItem((oldItem) => {
        return [...oldItem, inputList];
      });
      setInputList("");
  };

  return (
    <>
        <div className = "todo">
          <div className = "todo__card">
              <p className = "todo__detail">Your Daily Planner</p>
              <p className = "todo__greet">Good Morning, Sisam</p>
              <p className = "todo__date">Today Date</p>
              
              <div className = "todo__list">
                  <input type = "text" placeholder = "Add a Items" onChange = {addList} value = {inputList}/>
                  <button onClick = {addedList}> + </button>
                  <ol>
                    {item.map( (itemVal) => {
                        return <TodoList list = {itemVal} /> 
                    })}
                  </ol>
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
