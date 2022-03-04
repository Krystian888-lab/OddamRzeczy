import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { auth } from '../firebase/firebase.utils';

const Login = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
    email: '',
    password: '',
    });

    const handleChange = e => {
    if (e.target.name === 'email') {
        setEmail(e.target.value);
    } else if (e.target.name === 'password') setPassword(e.target.value);
    };

    const validate = () => {
    let isValid = true;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
        isValid = false;
        errors.email = 'Podany email jest nieprawidłowy!';
    } else {
        isValid = true;
        errors.email = '';
    }

    if (password.length < 6) {
        isValid = false;
        errors.password = 'Podane hasło jest za krótkie!';
    } else {
        isValid = true;
        errors.password = '';
    }

    setErrors({ ...errors });

    return isValid;
    };

    const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
  })
        setEmail('');
        setPassword('');
        history.push('/');
    } else {
        return errors;
    }
    };

return (
<section className="t-login">
<div className="o-row o-row--login">
    <h1 className="c-heading c-heading--level1 e-alignCenter">Zaloguj się</h1>
    <div className="c-icon-box__image margin__botom-top"></div>

    <form className="t-form-box" onSubmit={(e) => handleSubmit(e)} noValidate>
    <div className="t-form-login">

        <label htmlFor="email c-heading--level5">Email</label>
        
        <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            className={errors.email ? 'error' : null}
        ></input>
            {errors.email }
            <br />
            <br />
        <label htmlFor="password">Password</label>
        <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
        ></input>
            {errors.password}
            </div>

            <div className="t-login__buttons">
            <input 
            type="submit" 
            value="Zaloguj" 
            className="c-btn c-heading--level4 c-btn__login"></input>
            <NavLink to="/rejestracja" className="c-btn c-heading--level4 c-btn__login c-btn__start">
            Załóż konto
            </NavLink>
            </div>
            </form>
            </div>
    </section>
    );
};

export default Login;
