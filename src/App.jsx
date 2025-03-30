import Hsc from "./HorizontalScrollCarousel.jsx";
import About from "./subassets/About.jsx";
import Intro from "./subassets/Intro.jsx";

function App() {
  return (
    <>
      <section className="bg-[#1E1E24] relative z-[10] ">
        <div className="flex h-screen items-start pt-[17%] sm:pt-0 sm:items-center justify-center">
          <Intro />
        </div>
      </section>
      <Hsc />
      <section className="h-[250vh]" />
      <div id="about" className="relative w-screen z-0">
        <About />
      </div>
    </>
  );
}

export default App;
