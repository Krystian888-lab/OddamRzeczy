import React from "react";
import ContactUsInputs from "./ContactUsInputs";
// import Footer from "../Footer";


const ContactUs = () => {

 return (
  <section className="t-contact-form">
   <div className="o-container o-container--contact-form">

    <div className="o-row o-row--center-z">
     <div className="o-col o-col--lg50 box t-contact--left"></div>
     <div className="o-col o-col--lg50 box t-contact--right">

      <div className="t-contact-col--title">
       <h4 className="c-heading c-heading--level1 e-alignCenter">Skontaktuj sie z nami</h4>
       <div className="c-icon-box__image"></div>
      </div>
      <ContactUsInputs />

     </div>
    </div>
    {/* <Footer/> */}
   </div>
  </section>
 )
}

export default ContactUs;