import { Container, Row, Col } from "react-bootstrap";
import NavBar from "components/nav/navBar";
import Main from "./main/main";
import Footer from "components/footer/footer";

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col xs={11}>
          <Main />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Layout;
