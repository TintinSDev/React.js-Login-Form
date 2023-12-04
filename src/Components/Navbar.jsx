import React from "react";
// import { ReactDOM } from "react-dom";
import {  BrowserRouter} from "react-router-dom";
import "../App.css";


function Navbar() {
    // const handleClick = (e) => {
    //     e.preventDefault();
    // }
    
  return (
    <div className="navigation">
        <BrowserRouter>
      <a href = "/home">Home</a>
      <a href = "/about">About</a>
      <a href = "/login">Login</a>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
