import { Container, Col } from "react-bootstrap";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "layout/footer/footer";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

import MobileNavToggle from "components/mobile-nav-toggle/mobileNavToggle";

const Layout = () => {
  const [mobileToggle, setMobileToggle] = useState("nav-bar closed");
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
      <MobileNavToggle
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
      <Header mobileToggle={mobileToggle} setMobileToggle={setMobileToggle} />
      <Main />
      <Footer />
      <Col
        className={` ${
          backToTopActive ? "back-to-top scrolled" : "back-to-top"
        }`}
      >
        <ArrowUpCircleFill size={35} onClick={goBackTop} />
      </Col>
    </Container>
  );
};

export default Layout;
