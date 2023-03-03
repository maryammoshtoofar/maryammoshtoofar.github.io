import ServicesIcon from "./services-icon";
import Animated from "components/animate-component";
const ServiceCard = ({ service }) => {
  const { id, name, icon, color, description } = service;
  const animateConfig = {
    initial: { transform: "scale(2)", filter: "blur(4px)", opacity: 0 },
    whileInView: { transform: "scale(1)", filter: "blur(0)", opacity: 1 },
    transition: {
      duration: 1,
      delay: Number(`0.${id}5`),
    },
  };

  return (
    <Animated animateConfig={animateConfig}>
      <div className="card">
        <ServicesIcon
          className="icon"
          iconName={icon}
          size={25}
          color={color}
        />
        <h4>
          <span>{name}</span>
        </h4>
        <p>{description}</p>
      </div>
    </Animated>
  );
};

export default ServiceCard;
