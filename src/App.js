import React from 'react';
import './App.css';
import logo from './image/microsel_logo.png';

function App() {
  return (
    <div className="full-page">
      <div className="main-element">
        <div>
          <img src={logo} className="microsel-logo"></img>
        </div>
        <div className="receipt-element">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default App;
