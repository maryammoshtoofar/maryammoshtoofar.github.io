import { TypeAnimation } from "react-type-animation";

const TypeAnimate = () => {
  return (
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
  );
};

export default TypeAnimate;
