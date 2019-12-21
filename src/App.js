import React from 'react';

import './App.css';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <Button onClick={()=> window.location="facebook.com"}> Facebook </Button>
    </div>
  );
}

export default App;
