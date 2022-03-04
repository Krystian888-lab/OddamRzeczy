import React from "react";
import MenuLogin from "./Menu/MenuLogin";
import Menu from "./Menu/Menu";

const Navigation = () => {

 return (
  <header className="t-site-header">
   <div className="o-container o-container--menu">
    <div className="t-site-header__top">
     <MenuLogin />
     <Menu />
    </div>
   </div>
  </header>
 )
}

export default Navigation;
