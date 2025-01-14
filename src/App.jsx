import Hero from "./components/Hero";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import About from "./components/About";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
