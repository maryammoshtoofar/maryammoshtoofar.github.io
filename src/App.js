import "./App.css";
import NavBar from "components/nav";
import Home from "sections/home/home";
import About from "sections/about/about";
import Resume from "sections/resume/resume";
import Portfolio from "sections/portfolio/portfolio";
import Solutions from "sections/solutions/solutions";
import Contact from "sections/contact/contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Solutions />
      <Contact />
    </>
  );
}

export default App;
