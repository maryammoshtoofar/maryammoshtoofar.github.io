import Animated from "components/animate-component";
import { Container, Col, Row } from "react-bootstrap";
import DownloadButton from "./components/download-button";
const Resume = () => {
  const animateConfig = {
    initial: { transform: "translateY(50px)", opacity: 0 },
    whileInView: { transform: "translateY(0)", opacity: 1 },
  };
  return (
    <Container className="section resume" id="Resume">
      <Animated animateConfig={animateConfig}>
      <div className="section-title">
        <h2>Resume</h2>
        <DownloadButton />
      </div>
      <Row>
        <Col></Col>
      </Row>
      </Animated>
    </Container>
  );
};

export default Resume;
