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
            Hello World! I'm Maryam, a full-stack developer with a knack for
            turning coffee into code. My tech arsenal includes JavaScript,
            Next.js, TypeScript, HTML, CSS, Node.js, web3.js, and ethers.js but
            I'm always eager to jump into new tech. When I'm not busy coding,
            you'll find me diving into my studies as I pursue a Bachelor's
            degree in Computer Networking. I love everything that has to do with
            computers. With over 2 years of freelancing experience, I've had the
            pleasure of working on a variety of cool projects. One of my
            favorites is a web3 DApp where I got to play with both frontend and
            backend, making blockchain magic happen. I've also created an
            e-commerce website from scratch, proving that I can build not just
            virtual carts, but also user-friendly, efficient web platforms. On
            top of that, I'm a mentor at a coding bootcamp, guiding the next
            generation of developers and sharing my love for all things code.
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
