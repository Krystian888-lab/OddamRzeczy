import React from "react";
import HomeHeader from "./Homeheader/HomeHeader";
import HomeThreeColumns from "./Homeheader/HomeThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {

 return (
  <>
   <HomeHeader />
   <HomeThreeColumns />
   <FourSteps />
   <AboutUs />
   <WhoWeHelp />
   <ContactUs />
  </>
 )
}

export default Home;