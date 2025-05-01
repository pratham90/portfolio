import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative ">
      <div className="animated-background"></div>

      <main className="z-10 min-h-screen overflow-hidden main">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Skills />
                <div id="about" name="about">
                <About />
                </div>
              </>
            }
          />

          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
