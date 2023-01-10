import Icons from "sections/hero/components/icons/icons";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
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
            style={{ fontSize: "1em", color: "#0563bb", letterSpacing: "1px" }}
          />
        </p>
        <Icons />
      </Container>
    </div>
  );
};

export default Hero;
