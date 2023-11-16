import React from 'react';
import { useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";



function App() {
  const[isCompleteScreen,setIsCompleteScreen]=  useState(false);
  return (
    <div className="App">
      <h1>My ToDos</h1>
      <div className="todo-wrapper">
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' placeholder='Add Item to your list'></input>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' placeholder='Description'></input>
          </div>
          <div className='todo-input-item'>
            <button type='button' className='primaryBtn'>Add</button>
          </div>
        </div>

    
      <div className='btn-area'>
        <button className={`secBtn ${isCompleteScreen === false && 'active'}`} 
        onClick={()=>{setIsCompleteScreen(false)}}>Todo</button>

        <button className={`secBtn ${isCompleteScreen === true && 'active'}`}
         onClick={()=>{setIsCompleteScreen(true)}} >Completed</button>
      </div>
      <div className='todo-list'></div>
       <div className='todo-list-item'>
       <div>
       <h3>task1</h3>
        <p>Description</p>
       </div>
       <div>
         < MdDelete className='icon'></MdDelete>
         <IoCheckmarkDoneSharp className='icon'></IoCheckmarkDoneSharp>
       </div>
       </div>
     </div>
    </div>
  );
}

export default App;
