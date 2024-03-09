import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTMONIALS" title="What student says" />
        <Testmonials />
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
