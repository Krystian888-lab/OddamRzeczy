import React, { useState } from "react";

const ContactUsInputs = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [contactUs, setContactUs] = useState({
  name: '',
  email: '',
  message: '',
 });
 const [errors, setErrors] = useState({
  name: '',
  email: '',
  message: '',
 });


 const handleChange = e => {
  if (e.target.name === 'name') {
   setName(e.target.value);
  } else if (e.target.name === 'email') {
   setEmail(e.target.value);
  } else if (e.target.name === 'message') {
   setMessage(e.target.value);
  }
 };

 const validate = () => {
  let isValid = true;
  const nameRegex = /^[a-zA-Z]{1,50}$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const messageRegex = /^.{120,1000}$/;

  if (!nameRegex.test(name) || name.length <= 0) {
   isValid = false;
   errors.name = 'Podane imię jest nieprawidłowe!';
  } else {
   isValid = true;
   errors.name = '';
   contactUs.name = name;
  }

  if (!emailRegex.test(email)) {
   isValid = false;
   errors.email = 'Podany email jest nieprawidłowy!';
  } else {
   isValid = true;
   errors.email = '';
   contactUs.email = email;
  }

  if (!messageRegex.test(message)) {
   isValid = false;
   errors.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
  } else {
   isValid = true;
   errors.message = '';
   contactUs.message = message;
  }

  setErrors({ ...errors });

  setContactUs({ ...contactUs });

  return isValid;
 };

 const sendForm = (name, email, message) => {
  const url = ``;
  fetch(url, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({ name, email, message }),
  })
   .then(resp => resp.json())


 };

 const handleSubmit = e => {
  e.preventDefault();
  if (validate()) {
   sendForm(name, email, message);
   setName('');
   setEmail('');
   setMessage('');
  } else {
   return errors;
  }
 };

 return (
  <form className="t-contact main-form" noValidate onSubmit={handleSubmit} >

   <div className="o-row t-form__control">
    <div className="t-form__half-page">
     <div className="t-form__input-field">

      <input type="text"
       name="name"
       value={name}
       // placeholder="Krzysztof"
       onChange={handleChange}
       className={errors.name ? "t-form__error" : "t-form__input-field--input"} 
       required
       />
      
      <label
       className="t-form__input-field--label"
       >Wpisz swoje imię</label>
      <div 
      // className="t-form__error"
      >
       {errors.name}</div>

     </div>
    </div>

    <div className="t-form__half-page">
     <div className="t-form__label">

      <label className="t-form__label">Wpisz swój email</label>
      <input type="email"
       name="email"
       value={email}
       placeholder="abc@xyz.pl"
       onChange={handleChange}
       className={errors.email ? "t-form__error" : "t-form__input"}
      />
      <div className="t-form__error">
       {errors.email}
      </div>

     </div>
    </div>

    <div className="o-row t-form--message">
     <div className="t-form--message-page">

      <label className="t-form__label">Wpisz swoją wiadomość</label>
      <div className="t-form__input">

       <textarea name="message"
        value={message}
        placeholder={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat?"}
        rows={"5"}
        onChange={handleChange}
        className={errors.message ? "t-form__error" : "t-form__input"}
       />

       <div className="t-form__error">
        {errors.message}
       </div>
      </div>

      <div className="t-form--button">
       <input type="submit" value={"Wyślij"} className="t-form__btn" />
      </div>

     </div>
    </div>
   </div>
  </form>
 )
}

export default ContactUsInputs;