import './App.css';
import Login from './components/Login.js';
import Homepage from './components/homepage.js';
import Partpicker from './components/partpicker.js';
import Register from './components/register';
import Cpu from './components/cpu';
import ProductForm from './components/seller';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
 
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/homepage" element={<Homepage/>}></Route>
        <Route exact path="/partpicker" element={<Partpicker/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/cpu" element={<Cpu/>}></Route>
        <Route exact path="/productform" element={<ProductForm/>}></Route>


       
        </Routes>
    </div>
  );
}

export default App;
