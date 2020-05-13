import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  return (
    <div className="name">
    
    <p>My name is {value}</p>
    <div>
      <input type="text" value={value} onChange={handleChange}/>
      <button onClick={updateValue}>Submit</button>
      <p>Hey there, {name}</p>
    </div>  
    </div>
  );
}

export default App;
