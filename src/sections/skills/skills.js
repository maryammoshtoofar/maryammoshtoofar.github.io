import Animated from "components/animate-component";
import { Container, Row } from "react-bootstrap";

import Skill from "./components/skill";

const Skills = () => {
  const techStack = [
    { name: "JavaScript", percent: 90 },
    { name: "HTML:", percent: 95 },
    { name: "CSS", percent: 90 },
    { name: "TypeScript", percent: 65 },
    { name: "Nextjs", percent: 75 },
    { name: "Nodejs", percent: 70 },
    { name: "web3.js / ethers.js", percent: 65 },
    { name: "Responsive Web Design", percent: 90 },
    { name: "React Context / Redux", percent: 90 },
    { name: "Git", percent: 95 },
    { name: "MongoDB", percent: 55 },
    { name: "RESTful APIs", percent: 85 },
    { name: "SASS", percent: 75 },
    { name: "UI Frameworks (Tailwind , Bootstrap..)", percent: 95 },
    { name: "SSR", percent: 55 },
    { name: "Figma / Adobe XD", percent: 80 },
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
