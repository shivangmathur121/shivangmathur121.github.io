import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary bg-hero-pattern bg-cover bg-center">
        <div className="">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
