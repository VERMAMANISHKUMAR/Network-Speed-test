import React from 'react';
import SpeedTest from './SpeedTest';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-primary text-white text-center py-3">
        <h1>Network Speedtest</h1>
      </header>
      <div className="container my-5">
        <SpeedTest />
      </div>
    </div>
  );
}

export default App;
