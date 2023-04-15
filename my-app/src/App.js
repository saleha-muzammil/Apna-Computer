import './App.css';
import Login from './components/Login.js';
import Homepage from './components/homepage.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
 
    <div className="App">
      <BrowserRouter>
      <h3>
        اپنا کمپیوٹر
       </h3>
      <header className="App-header">
      <div>
      <Login/>
      </div>
      </header>
      <Routes>
        <Route exact path="/" component={Login}/>
        <Route exact path="/homepage" component={Homepage}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
