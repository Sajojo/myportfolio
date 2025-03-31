import Hsc from "./HorizontalScrollCarousel.jsx";
import About from "./subassets/About.jsx";
import Intro from "./subassets/Intro.jsx";
import Contact from "./subassets/Contact.jsx";
import { Warm } from "./subassets/Warm.jsx";

function App() {
  return (
    <>
      <Warm />

      <div id="wrapper" className="">
        <div className="bg-[#1E1E24] relative z-[10] flex h-screen items-center justify-center ">
          <Intro />
        </div>
        <Hsc />
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
