import React from "react";

const TodoList = (props) =>{
    return (
        <>
            <div className = "todo__style">
            <i className="fas fa-times" onClick = {() => {props.onSelect(props.id)}}></i>
                <li>{props.list}</li>
            </div>
         </>
    )
}

export default TodoList;