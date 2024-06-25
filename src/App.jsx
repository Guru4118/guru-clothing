import React from "react";
import Home from "./counter.jsx";
import Men from "./mens.jsx";
import Women from "./women.jsx";
import Accessorie from "./access.jsx";
import About from "./about.jsx";
import Buy from "./buy.jsx";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div>
      
    <p className="nnn">Sins Clothing</p>
  
    </div>
     <nav>
            <img id="logo" src="img/icon.png" alt="" />
            <p id="name">Sins clothing</p>
           
            
            

                <p onClick={() => scrollToSection("men")}>Men</p>
                <p onClick={() => scrollToSection("women")}>Womens</p>
                <p onClick={() => scrollToSection("accessorie")}>Accessorie</p>
                <p onClick={() => scrollToSection("buy")}>Buy</p>
                <p onClick={() => scrollToSection("about")}>About</p>
                <p onClick={() => scrollToSection("about")}>Contact</p>
                <p id="sidetit">   ExpLoRe Ur tAsTe </p>
                
                </nav>
      

      <div id="home">
        <Home />
      </div>

      <div id="men">
        <Men />
      </div>

      <div id="women">
        <Women />
      </div>

      <div id="accessorie">
        <Accessorie />
      </div>

      <div id="buy">
        <Buy />
      </div>

      <div id="about">
        <About />
      </div>
      
    </>
  );
}

export default App;
