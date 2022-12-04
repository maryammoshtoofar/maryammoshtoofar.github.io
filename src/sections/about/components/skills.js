import { Container, Col, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  return (
    <Container className="section skills">
      <div class="section-title">
        <h2>Skills</h2>
        <p>
          I believe the Devil is in the details but that doesn't mean I miss the
          big picture. I enjoy working with a team and I always appreciate a
          good challenge. Here are some of my Tech Stack listed below but I'm
          constantly trying to learn more
        </p>
      </div>
      <Row>
        <dl>
          <dd>
            <div className="skills-title">
              <span>HTML</span>
              <span>100%</span>
            </div>
            <ProgressBar now={100} />
          </dd>
          <dd>
            <div className="skills-title">
              <span>CSS</span>
              <span>90%</span>
            </div>
            <ProgressBar now={90} />
          </dd>
          <dd>
            <div className="skills-title">
              <span>JavaScript</span>
              <span>90%</span>
            </div>
            <ProgressBar now={90} />
          </dd>
          <dd>
            <div className="skills-title">
              <span>React</span>
              <span>80%</span>
            </div>
            <ProgressBar now={80} />
          </dd>
          <dd>
            <div className="skills-title">
              <span>Responsive Web Design</span>
              <span>90%</span>
            </div>
            <ProgressBar now={90} />
          </dd>
          <dd>
            <div className="skills-title">
              <span>TypeScript</span>
              <span>70%</span>
            </div>
            <ProgressBar now={70} />
          </dd>
        </dl>
      </Row>
    </Container>
  );
};

export default Skills;
