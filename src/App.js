import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Hello, Yeshwanth!');

  const handleClick = () => {
    setMessage('I told you, there is nothing here!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={handleClick}>Don't Click Me!</button>
      </header>
    </div>
  );
}

export default App;
