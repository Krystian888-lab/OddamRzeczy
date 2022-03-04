import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {

 return (
  <BrowserRouter>
   <>
    <Navigation />
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/logowanie" component={Login} />
     <Route path="/rejestracja" component={Register} />
     <Route path="/wylogowano" component={Logout} />
    </Switch>
   </>
  </BrowserRouter>
 );
}

export default App;