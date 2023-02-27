import Icons from "sections/hero/components/icons/icons";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Animated from "components/animate-component";

const Hero = () => {
  const animateConfig = {
    initial: { transform: "translateZ(-100px) translateX(100px)", opacity: 0 },
    whileInView: { transform: "translateZ(0) translateX(0)", opacity: 1 },
  };
  return (
    <div className="section hero">
      <Container id="Home">
        <Animated animateConfig={animateConfig}>
          <h1>Maryam Moshtoofar</h1>
          <p>
            I'm a
            <TypeAnimation
              sequence={[
                " Developer",
                1000,
                " Bootcamp TA",
                2000,
                " Freelancer",
                1000,
              ]}
              speed={10}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                color: "#0563bb",
                letterSpacing: "1px",
              }}
            />
          </p>
          <Icons />
        </Animated>
      </Container>
    </div>
  );
};

export default Hero;
