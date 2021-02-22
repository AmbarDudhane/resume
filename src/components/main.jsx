import About from "./about";
import Contact from "./contact";
import Facts from "./facts";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Skills from "./skills";

const Main = () => {
  return (
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
