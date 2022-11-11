import React, { useState } from "react";
import Contact from "../components/Contact/Contact";
import About from "../components/Content/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const Index = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  return (
    <div className="main">
      <Header
        setIsToggleActive={setIsToggleActive}
        isToggleActive={isToggleActive}
      />
      <About isToggleActive={isToggleActive} />
      <Contact />
      <Footer isToggleActive={isToggleActive} />
      <p>Things to add: 1-resume 2-projects 3-quotes</p>
    </div>
  );
};

export default Index;
