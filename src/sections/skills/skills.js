import Animated from "components/animate-component";
import { Container, Row } from "react-bootstrap";

import Skill from "./components/skill";

const Skills = () => {
  const techStack = [
    { name: "JavaScript", percent: 70 },
    { name: "HTML/CSS:", percent: 95 },
    { name: "React", percent: 70 },
    { name: "TypeScript", percent: 60 },
    { name: "Nextjs", percent: 55 },
    { name: "Nodejs", percent: 40 },
    { name: "web3.js / ethers.js", percent: 50 },
    { name: "Responsive Web Design", percent: 80 },
    { name: "React Context / Redux", percent: 70 },
    { name: "Git", percent: 50 },
    { name: "MongoDB", percent: 50 },
    { name: "RESTful APIs", percent: 60 },
    { name: "SASS", percent: 65 },
    { name: "UI Frameworks (Tailwind , Bootstrap..)", percent: 95 },
    { name: "MUI", percent: 85 },
    { name: "Figma / Adobe XD", percent: 70 },
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
        <p style={{ textAlign: "center" }}>and so much more... </p>
      </Row>
    </Container>
  );
};

export default Skills;
