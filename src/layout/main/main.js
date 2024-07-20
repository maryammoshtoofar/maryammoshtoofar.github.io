import Hero from "sections/hero/hero";
import About from "sections/about/about";
import Skills from "sections/skills/skills";
import Resume from "sections/resume/resume";
import Solutions from "sections/solutions/solutions";
import Contact from "sections/contact/contact";
import Portfolio from "sections/portfolio/portfolio";

const Main = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Solutions />
        <Contact />
      </main>
    </>
  );
};

export default Main;
