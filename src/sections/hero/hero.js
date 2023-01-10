import Icons from "sections/hero/components/icons/icons";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const springs = useSpring({
    from: {
      transform: "scale(0)",
    },
    to: { transform: "scale(1)" },
    config: { duration: "1000" },
  });
  return (
    <animated.div style={{ ...springs }}>
      <div className="section hero">
        <Container id="Home">
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
        </Container>
      </div>
    </animated.div>
  );
};

export default Hero;
