import { Container, Row, Col } from "react-bootstrap";
import NavBar from "components/nav/nav-bar";
import Main from "./main/main";
import Footer from "components/footer/footer";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

const Layout = () => {
  const handleScroll = () => {
    if (window.scrollY > 100) setBackToTopActive(true);
    else setBackToTopActive(false);
  };
  const goBackTop = () => {
    window.scrollTo(0, 0);
  };
  const [backToTopActive, setBackToTopActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <Col
          className={` ${
            backToTopActive ? "back-to-top active" : "back-to-top"
          }`}
        >
          <ArrowUpCircleFill size={35} onClick={goBackTop} />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
