import { Container, Row, Col } from "react-bootstrap";
import NavBar from "components/nav/navBar";
import Main from "./main/main";

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col xs={8}>
          <Main />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
