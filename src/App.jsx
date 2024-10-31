import { useState } from 'react'
import './App.css'
import logo from "./assets/logo.svg"
import deleteBtn from "./assets/deleteBtn.svg"
import { Link } from 'react-router-dom'


function App() {
  const [isShaking, setIsShaking] = useState(false);
  const [list, setList] = useState([
    "Hello this is my first Todo",
    "Hello this is my second Todo.",
    "Hello this is my 3th Todo.",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setList([...list, inputValue.trim()]);
      setInputValue("");
    } else {
      setIsShaking(true)
      document.getElementById("input").style.borderColor = "red"
      setTimeout(() => {
         document.getElementById("input").style.borderColor = "#EEEEEE"
         setIsShaking(false)
      }, 600);
    }
  };

  const handleRemoveTodo = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
    <header>
      <div className='container'>
       <div className='content'>
       <img className='logo' src={logo}/>
       <ul>
        <li><a id='home' href="#">Home</a></li>
        <li><Link to='/about'>About</Link></li>
       </ul>
       </div>
      </div>
    </header>
    
    <div className='main'>
      <div className='container'>
        <div className='mainCont'>
          <h1>Simple ToDo App</h1>
          <p>This todo app for test design.</p>
        </div>
        <div className='toDo'>
          <div className='addTo'>
            <input id='input' className={isShaking ? "shake input" : "input"} type="text" placeholder='Write Text here . . .' value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} />
            <button className='btn' onClick={handleAddTodo}>+ Add New</button>
            <button className='Mbtn' onClick={handleAddTodo}>+ Add New</button>
            </div>
            <div className='border'></div>
            <div id="list">
              {list.map((item, index) => (
                <div key={index} className="boxItem">
                  <div>{item}</div>
                  <button onClick={() => handleRemoveTodo(index)} className="deleteBtn">
                    <img src={deleteBtn} alt="Delete" />
                  </button>
                </div>
              ))}
            </div>
            <div id="number"><span className='number'>Total List</span> : {list.length}</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
