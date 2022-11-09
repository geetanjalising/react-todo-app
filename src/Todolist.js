import React from 'react';
import "./index.css";

const Todolist=(props)=>{
  
    return (
        <>
        <div className='todo_style'>
        {/* <img src="icon1.png" alt="no"/> */}
        <div className='btn'>
        <button onClick={()=>{
            props.onSelect(props.id)
        }
        }>×</button></div>
        <li>   {props.text}</li>
        </div>
    </>
    );
};

export default Todolist;