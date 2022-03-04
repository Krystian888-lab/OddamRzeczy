import React from "react";
// import {NavLink} from "react-router-dom";
import { Link } from 'react-scroll'

const options = {
 spy: true,
 smooth: true,
 duration: 500,
};

const Menu = () => {

 return (

  <div className="o-col t-site-header__menu">
   <ul className="c-nav">
    <li className="c-btn c-btn__start c-nav__item c-heading--level4 e-alignCenter">
     <Link to="t-site-header" {...options}>
      Start
     </Link>
    </li>
    <li className="c-btn c-nav__item c-heading--level4 e-alignCenter">
     <Link to="t-our-path" {...options}>
      O co chodzi
     </Link>
    </li>
    <li className="c-btn c-nav__item c-heading--level4 e-alignCenter">
     <Link to="t-about-us" {...options}>
      O nas
     </Link>
    </li>
    <li className="c-btn c-nav__item c-heading--level4 e-alignCenter">
     <Link to="t-help"  {...options}>
      Fundacje i  organizacje
     </Link>
    </li>
    <li className="c-btn c-nav__item c-heading--level4 e-alignCenter">
     <Link to="t-contact-form"  {...options}>
      Kontakt
     </Link>
    </li>
   </ul>
  </div>
 )
}

export default Menu;