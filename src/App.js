import { useEffect } from "react";
import "./App.css";
import Aos from "aos";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Particle from "./components/UI/Particle";
import Contact from "./components/UI/Contact"

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <Header />
      <Particle />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />    
      </main>
    </>
  );
}

export default App;
