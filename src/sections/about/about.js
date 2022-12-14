import { Container, Col, Row } from "react-bootstrap";
import about from "../../assets/images/about.jpg";
import PersonalDetails from "./components/personalDetails";
import Skills from "./components/skills";

const About = () => {
  return (
    <Container className="section about" id="About">
      <div className="section-title">
        <h2>About</h2>
        <p>
          Hello World! I'm Maryam Moshtoofar, a Front-End Web Developer based in
          Tehran, Iran. From creating SEO friendly content to lines of code on a
          web page, I love combining the worlds of logic and creative design to
          make eye-catching, accessible and user-friendly websites and web
          applications.
        </p>
      </div>
      <Row>
        <Col>
          <img src={about} alt="About Me" />
        </Col>
        <PersonalDetails />
      </Row>
      <Skills />
    </Container>
  );
};

export default About;
