import React from "react";
import {
  Navbar,
  Home,
  Fitur,
  Testimoni,
  Harga,
  Footer,
} from "../components/landingpage_components";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Fitur />
      <Testimoni />
      <Harga />
      <Footer />
    </>
  );
};

export default LandingPage;
