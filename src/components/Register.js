import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from './../firebase/firebase.utils';
import { useHistory } from "react-router";

const Register = () => {
 const history = useHistory();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [errors, setErrors] = useState({
  email: '',
  password: '',
  confirmPassword: '',
 });

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

  if (confirmPassword !== password) {
   isValid = false;
   errors.confirmPassword = 'Podane hasła muszą być identyczne!';
  } else {
   isValid = true;
   errors.confirmPassword = '';
  }

  setErrors({ ...errors });

  return isValid;
 };

 const handleSubmit = async e => {
  e.preventDefault();

  if (validate()) {
   if (password !== confirmPassword) {
    alert('passwords dont match');
    return;
   }

   try {
     await auth.createUserWithEmailAndPassword(
     email,
     password
    )
    history.push("/")

    // await createUserProfileDocument(user);

    
    setEmail('');
    setPassword('');
    setConfirmPassword('');
   } catch (error) {
   }
  } else {
   return errors;
  }
 };

 const handleChange = e => {
  if (e.target.name === 'email') {
   setEmail(e.target.value);
  } else if (e.target.name === 'password') {
   setPassword(e.target.value);
  } else if (e.target.name === 'password2') {
   setConfirmPassword(e.target.value);
  }
 };

 return (
  <section className="t-login">
   <div className="o-row o-row--login">
    <h1 className="c-heading c-heading--level1 e-alignCenter">Załóż konto</h1>
    <div className="c-icon-box__image margin__botom-top"></div>
    <form className="t-form-box" onSubmit={handleSubmit}>
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
      {errors.email}

      <br />
      <br />
      <label htmlFor="password">Hasło</label>
      <input
       type="password"
       name="password"
       id="password"
       value={password}
       onChange={handleChange}
      ></input>
      {errors.password}

      <br />
      <br />
      <label htmlFor="password2">Powtórz hasło</label>
      <input
       type="password"
       name="password2"
       id="password2"
       value={confirmPassword}
       onChange={handleChange}
      ></input>
      {password !== confirmPassword}

     </div>
     <div className="t-login__buttons">

      <input
       type="submit"
       value="Załóż konto"
       className="c-btn c-heading--level4 c-btn__login"></input>

      <NavLink to="/logowanie" className="c-btn c-heading--level4 c-btn__login c-btn__start">
       Zaloguj
      </NavLink>

     </div>
    </form>
   </div>
  </section>
 );
};

export default Register;