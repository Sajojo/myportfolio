// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Hsc from "./subassets/HorizontalScrollCarousel.jsx";
import About from "./subassets/About.jsx";
import Intro from "./subassets/Intro.jsx";
import Contact from "./subassets/Contact.jsx";
import ToTopLight from "./subassets/ToTopWhite.jsx";

function App() {
  return (
    <>
      <div id="home" className="">
        <div
          id="top"
          className="bg-[#1E1E24] relative z-[100] flex h-screen items-start sm:items-center justify-center "
        >
          <Intro />
        </div>
        <div>
          <div id="work">
            <Hsc />
          </div>
          <section className="h-[250vh]" />
          <div>
            <ToTopLight />
            <div id="about" className="sticky top-0 w-screen z-30">
              <About />
            </div>
            <div id="ctc">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
