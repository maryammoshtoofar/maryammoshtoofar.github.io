import Animated from "components/animate-component";
import { Container, Col, Row } from "react-bootstrap";
import Card from "./components/card/card";
import { projects } from "data/projects";

const Portfolio = () => {
  const animateConfig = {
    initial: { transform: "translateY(50px)", opacity: 0 },
    whileInView: { transform: "translateY(0)", opacity: 1 },
  };

  return (
    <Container className="section resume" id="Portfolio">
      <Animated animateConfig={animateConfig}>
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Some of these projects require a VPN</p>
        </div>
        <div className="portfolios">
          {projects.map((project) => (
              <Card key={project.id} project={project} />
          ))}
        </div>
      </Animated>
    </Container>
  );
};

export default Portfolio;
