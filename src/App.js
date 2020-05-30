import React from 'react';
import axios from 'axios'
import './App.css';

const buttonClicked = () => {
  axios.post('/api/storeEvent', {test: 'test'}).then((res) => {
    console.log(res.data)
  })
}

function App() {
  return (
    <div className="App">
      <button onClick={buttonClicked}>CLICK ME </button>
    </div>
  );
}

export default App;
