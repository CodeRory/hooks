import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')

  return (
    <div className="name">
    
    <p>My name is {name}</p>
    <div>
      <input type="text"/>
      <button>Submit</button>
      <p>Hey there, {name}</p>
    </div>  
    </div>
  );
}

export default App;
