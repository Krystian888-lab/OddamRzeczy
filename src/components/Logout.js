import React from "react";
import {NavLink} from "react-router-dom";


const Logout = () => {
 

return (
    <section className="t-login">
    <div className="o-row o-row--login">
        <h1 className="c-heading c-heading--level1 e-alignCenter">
            Wylogowanie nastąpiło pomyślnie</h1>
        <div className="t-form-login">
        <div className="c-icon-box__image margin__botom-top"></div>
        <div className="t-login__off">
        <NavLink exact to="/" 
        
        className="c-btn c-heading--level4 c-btn__login c-btn__start">Strona główna</NavLink>
        </div>
        </div>
    </div>
    </section>
    )
};

export default Logout;