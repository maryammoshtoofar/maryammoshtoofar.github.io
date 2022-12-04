import { Container, Col, Row } from "react-bootstrap";
import DownloadButton from "./components/download-button";
const Resume = () => {
  return (
    <Container className="section resume">
      <div class="section-title">
        <h2>Resume</h2>
        <DownloadButton />
      </div>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Resume;
