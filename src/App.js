import './App.css';
import Login from './components/Login.js';
import Homepage from './components/homepage.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
 
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/homepage" element={<Homepage/>}></Route>
        </Routes>
      <h3>
        اپنا کمپیوٹر
       </h3>
    </div>
  );
}

export default App;
