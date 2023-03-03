import Animated from "../../components/animate-component";
import { Container, Col, Row, Image } from "react-bootstrap";
import about from "../../assets/images/about.jpg";
import PersonalDetails from "./components/personalDetails";


const About = () => {
  const animateConfig = {
    initial: { transform: "translateY(50px)", opacity: 0 },
    whileInView: { transform: "translateY(0)", opacity: 1 },
  };
  return (
    <Container className="section about" id="About">
      <Animated animateConfig={animateConfig}>
        <div className="section-title">
          <h2>About</h2>
          <p>
            Hello World! I'm Maryam Moshtoofar, a Front-End Web Developer based
            in Toronto, Canada. From creating SEO friendly content to lines of code
            on a web page, I love combining the worlds of logic and creative
            design to make eye-catching, accessible and user-friendly websites
            and web applications.
          </p>
        </div>
        <Row>
          <Col lg={4}>
            <Image fluid rounded src={about} alt="About Me" />
          </Col>
          <PersonalDetails />
        </Row>
      </Animated>
    </Container>
  );
};

export default About;
