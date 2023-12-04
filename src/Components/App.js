
import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import LoginForm from './LoginForm/LoginForm';
import { Route,BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Navbar/>
    <BrowserRouter>
      {/* // <Switch> */}
      <Route  exact path="/home">
      <Home/>
      </Route>
      <Route exact path="/login">
      <LoginForm/>
      </Route>
      <Route exact path="/about">
      <About />
      </Route>
      {/* // </Switch>
       */}
     </BrowserRouter>
    </div>
  );
}

export default App;
