import React, {useState} from 'react';
import './App.css';
import Posts from './Posts';

function App() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')


  const handleChange = e => {
    setValue(e.target.value)
  }

  const updateValue = e => {
    e.preventDefault()
    setName(value)

  }

  return (
    <div className="name">
    
    <p>My name is {value}</p>
    <div>
      <input type="text" value={value} onChange={handleChange}/>
      <button onClick={updateValue}>Submit</button>
      <p>Hey there, {name}</p>
    </div>  
    <Posts />
    </div>
  );
}

export default App;
