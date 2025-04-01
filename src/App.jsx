// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Hsc from "./subassets/HorizontalScrollCarousel.jsx";
import About from "./subassets/About.jsx";
import Intro from "./subassets/Intro.jsx";
import Contact from "./subassets/Contact.jsx";

function App() {
  return (
    <>
      <div id="home" className="">
        <div className="bg-[#1E1E24] relative z-[10] flex h-screen items-center justify-center ">
          <Intro />
        </div>
        <div id="work">
          <Hsc />
        </div>
        <section className="h-[250vh]" />
        <div id="about" className="sticky top-0 w-screen z-0">
          <About />
        </div>
        <div id="ctc">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
