import React from 'react';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import EventForm from './components/EventForm'

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <EventForm />
    </div>
  );
}

export default App;
