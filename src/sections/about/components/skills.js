import { Container, Col, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  const techStack = {
    HTML: 100,
    CSS: 90,
    JavaScript: 90,
    React: 80,
    RWD: 90,
    Typescript: 70,
  };

  return (
    <Container className="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <Row>
        <dl>
          {Object.entries(techStack).map((skill) => (
            <dd key={skill[0]}>
              <div className="skills-title">
                <span>{skill[0]}</span>
                <span>{skill[1]}%</span>
              </div>
              <ProgressBar now={skill[1]} />
            </dd>
          ))}
        </dl>
      </Row>
    </Container>
  );
};

export default Skills;
