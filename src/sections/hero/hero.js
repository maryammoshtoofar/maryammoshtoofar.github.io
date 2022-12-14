import Icons from "sections/hero/components/icons/icons";
import { Container, Image } from "react-bootstrap";
import hero from "../../assets/images/hero.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <Container className="section hero" id="Home">
      <Image src={hero} />
      <h1>Maryam Moshtoofar</h1>
      <h3>
        I'm a
        <TypeAnimation
          sequence={[
            " Front-End Developer",
            1000,
            " React Bootcamp TA",
            2000,
            " Freelancer",
            1000,
          ]}
          speed={10}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1em", color: "#0563bb" }}
        />
      </h3>
      <Icons />
    </Container>
  );
};

export default Hero;
