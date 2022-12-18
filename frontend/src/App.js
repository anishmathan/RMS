// import logo from './logo.svg';

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./forms/Registration";
import Login from "./forms/Login";
// import Home from "./component/Home";
import './App.css';


function App() {
  return (
     <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/" element={<Registration/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
   );
  }
  


export default App;
