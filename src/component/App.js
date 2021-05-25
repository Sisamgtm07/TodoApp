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

  const delItem = (id) =>{
    console.log("Deletd");
    setItem((oldItems) => {
        return oldItems.filter( (arrElem, index) => {
          return index != id;
        });
    });
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
                  <button onClick = {addedList}> <i class="fas fa-plus"></i> </button>
                  <ol>
                    {item.map( (itemVal,index) => {
                        return <TodoList key = {index} 
                                         id = {index}
                                         list = {itemVal}
                                         onSelect = {delItem} /> 
                    })}
                  </ol>
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
