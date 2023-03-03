import Animated from "components/animate-component";
import { Container, Row } from "react-bootstrap";

import Skill from "./components/skill";

const Skills = () => {
  const techStack = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 90 },
    { name: "React", percent: 80 },
    { name: "RWD", percent: 90 },
    { name: "Typescript", percent: 70 },
  ];

  const animateConfig = {
    initial: { transform: "translateY(50px)", opacity: 0 },
    whileInView: { transform: "translateY(0)", opacity: 1 },
  };

  return (
    <Container className="section skills">
      <Animated animateConfig={animateConfig}>
        <div className="section-title">
          <h2>Skills</h2>
        </div>
      </Animated>
      <Row>
        <dl>
          {techStack.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </dl>
      </Row>
    </Container>
  );
};

export default Skills;
