import Icons from "sections/hero/components/icons/icons";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container className="section footer">
      <div className="section-title">
        <h2>Maryam Moshtoofar</h2>
      </div>
      <Icons />
      <div className="credits">
        <span>©Copyright All Rights Reserved</span>
        <span>Designed by M.Moshtoofar</span>
      </div>
    </Container>
  );
};

export default Footer;
