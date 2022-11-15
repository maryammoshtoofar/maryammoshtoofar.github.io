import { Container, Row, Col } from "react-bootstrap";
import NavBar from "components/nav/navBar";
import Home from "sections/home/home";
import About from "sections/about/about";
import Resume from "sections/resume/resume";
import Portfolio from "sections/portfolio/portfolio";
import Solutions from "sections/solutions/solutions";
import Contact from "sections/contact/contact";
const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col xs={8}>
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Solutions />
          <Contact />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
