import { Container, Col, Row, Image } from "react-bootstrap";
import about from "../../assets/images/about.jpg";
import PersonalDetails from "./components/personalDetails";
import { useSpring, animated } from "@react-spring/web";

const About = () => {
  const springs = useSpring({
    from: {
      opacity: "0",
      transform: "translateY(50px)",
    },
    to: { opacity: "1", transform: "translateY(0)" },
    config: { duration: "1000" },
  });
  return (
    <Container className="section about" id="About">
      <animated.div style={{ ...springs }}>
        <div className="section-title">
          <h2>About</h2>
          <p>
            Hello World! I'm Maryam Moshtoofar, a Front-End Web Developer based
            in Tehran, Iran. From creating SEO friendly content to lines of code
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
      </animated.div>
    </Container>
  );
};

export default About;
