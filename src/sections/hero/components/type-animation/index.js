import { TypeAnimation } from "react-type-animation";

const TypeAnimate = () => {
  return (
    <p>
      I'm a
      <TypeAnimation
        sequence={[
          " Full-Stack Developer",
          1000,
          " Coding Bootcamp Mentor",
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
          letterSpacing: "1px",
        }}
      />
    </p>
  );
};

export default TypeAnimate;
