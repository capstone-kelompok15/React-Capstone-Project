import React from "react";
import {
  Navbar,
  Home,
  Fitur,
  Testimoni,
  Footer,
} from "../components/landingpage_components";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Fitur />
      <Testimoni />
      <Footer />
    </>
  );
};

export default LandingPage;
