import Icons from "sections/hero/components/icons/icons";
import { Container } from "react-bootstrap";
import Animated from "components/animate-component";
import TypeAnimate from "./components/type-animation";

const Hero = () => {
  const animateConfig = {
    initial: { transform: "translateZ(-100px) translateX(100px)", opacity: 0 },
    whileInView: { transform: "translateZ(0) translateX(0)", opacity: 1 },
  };
  return (
    <div className="section hero" id="Home">
      <Container>
        <Animated animateConfig={animateConfig}>
          <h1>Maryam Moshtoofar</h1>
          <TypeAnimate />
          <Icons />
        </Animated>
      </Container>
    </div>
  );
};

export default Hero;
