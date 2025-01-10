import Hero from "./components/Hero";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
};

export default App;
