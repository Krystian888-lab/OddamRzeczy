import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {auth} from './../../firebase/firebase.utils';

const MenuLogin = () => {
 const [email, setEmail] = useState("");
 
 

 auth.onAuthStateChanged((user) => {
  if (user) {
   console.log(user);
   setEmail(user.email);
  } 
 });

 return (
  <div className="o-col t-site-header__logo">
   <ul className="c-nav">
    {email !== "" ? (
     <>
      <li className="c-btn c-nav__logo e-alignCenter">
       Cześć &nbsp; {email}!
      </li>
      <li className="c-btn c-nav__logo e-alignCenter">
       <NavLink to="/oddaj-rzeczy">
        Oddaj-rzeczy
       </NavLink>
      </li>
      <li className="c-btn c-btn--accent c-nav__logo e-alignCenter">
       
       <NavLink to="/wylogowano" 
       >
        wylogowano
       </NavLink>
      </li>
     </>
     )
     :
     (
      <>
       <li className="c-btn c-nav__logo e-alignCenter">
        <NavLink to="/logowanie" >
         Zaloguj
        </NavLink>
       </li>
       <li className="c-btn c-btn--accent c-nav__logo e-alignCenter">
        <NavLink to="/rejestracja" >
         Załóż konto
        </NavLink>
       </li>
      </>
     )}
   </ul>
  </div>
 )
}

export default MenuLogin;