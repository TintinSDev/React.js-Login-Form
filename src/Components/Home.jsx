import { Redirect, Router } from "react-router-dom";
import React from "react";

export default function Home({ isSignedIn }) {
    // if the user isn't signed in, redirect them to the login page
   <Router> if (!isSignedIn) return <Redirect to="/login" />;</Router>
  
    // otherwise, return the home page
    return (
      <div>
        <h1>Home!</h1>
        
       
      </div>
    );
  }
