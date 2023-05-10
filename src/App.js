import './App.css';
import Main from './components/Main.js';
import Homepage from './components/homepage.js';
import Partpicker from './components/partpicker.js';
import Register from './components/register';
import CPUDisplay from './components/CPU';
import ProductForm from './components/admin.js';
import {Routes,Route} from "react-router-dom";
import React from 'react';
import Testrender from './components/Testrender';
import CPUSelector from './components/CPUSelector';
import CoolerSelector from './components/CoolerSelector';
import MotherboardSelector from './components/MotherboardSelector';
import MemorySelector from './components/MemorySelector';
import StorageSelector from './components/StorageSelector';
import VideocardSelector from './components/VideocardSelector';
import CaseSelector from './components/CaseSelector';
import PSUSelector from './components/PSUSelector';
import Buildguide from './components/buildguide';
import Formfile from './components/formfile';
import PreBuild from './components/preBuild';

function App() {
  return (
 
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/homepage" element={<Homepage/>}></Route>
        <Route exact path="/partpicker" element={<Partpicker/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/cpu" element={<CPUDisplay/>}></Route>
        <Route exact path="/productform" element={<ProductForm/>}></Route>
        <Route exact path="/testrender" element={<Testrender />}></Route>
        <Route exact path="/CPUSelector" element={<CPUSelector/>}></Route>
        <Route exact path="/CoolerSelector" element={<CoolerSelector/>}></Route>
        <Route exact path="/MotherboardSelector" element={<MotherboardSelector/>}></Route>
        <Route exact path="/MemorySelector" element={<MemorySelector/>}></Route>
        <Route exact path="/StorageSelector" element={<StorageSelector/>}></Route>
        <Route exact path="/VideocardSelector" element={<VideocardSelector/>}></Route>
        <Route exact path="/CaseSelector" element={<CaseSelector/>}></Route> 
        <Route exact path="/PSUSelector" element={<PSUSelector/>}></Route>        
        <Route exact path="/buildguide" element={<Buildguide/>}></Route>
        <Route exact path="/formfile" element={<Formfile/>}></Route>
        <Route exact path="/preBuild" element={<PreBuild/>}></Route>
       
        </Routes>
    </div>
  );
}

export default App;
