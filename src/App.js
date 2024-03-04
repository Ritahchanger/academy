import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Program />
      </div>
    </div>
  );
};

export default App;
