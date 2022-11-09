import React ,{useState} from 'react';
import "./index.css";
import Todolist from './Todolist.js';

function App(){
    const [inputList,setInputList]=useState("");
    const [Items,setItems]=useState([]);

    function itemEvent(event){
        setInputList(event.target.value);
    }
    function addListItems(){
        setItems((oldItems)=>{
         return [...oldItems, inputList];
        })
        setInputList("")
    };
    const deleteItem=(id)=>{
      console.log("deleted");
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
         return index!==id;
        })
      })
    };
  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <br/>
        <h1>My Todo List</h1> 
        <br/>
        <input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent}/>
        <button onClick={addListItems}> + </button>
        <ol>
            {/* { <li>{inputList}</li> } */}
          { Items.map((itemval,index)=>{
            // return <li>{itemval}</li>
            return <Todolist 
             key={index}
             text={itemval}
             id={index}
             onSelect={deleteItem}
             />
          
          }) }
        </ol>
        </div>
    </div>
    </>
  );
  }
export default App;