import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('Click Me');
  const changeHandler = () => {
    setName('Boom!');
  }

  return (
    <div className="App">
     <button onClick={changeHandler} >{name}</button>
    </div>
  );
}

export default App;
