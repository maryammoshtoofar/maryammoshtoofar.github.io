import { Container, Col, Row } from "react-bootstrap";
import ServicesIcon from "./services-icon";

const Solutions = () => {
  const services = [
    {
      name: "Development",
      icon: "CodeSlash",
      color: "#007aff",
      description:
        "Having agreed on the look and feel of a web app with the team , I can help bring it to life with front-end coding.",
    },
    {
      name: "Maintenance",
      icon: "Tools",
      color: "#e80368",
      description:
        "I can assist with advancing your web-based software to keep it efficient and compliant with all your evolving business needs.",
    },
    {
      name: "Optimization",
      icon: "BarChartFill",
      color: "#ffc107",
      description:
        "I can help provide high availability and trouble-free functionality of your web app and resolve issues in usage and technology",
    },
  ];

  return (
    <Container className="section solutions">
      <div className="section-title">
        <h2>Services</h2>
      </div>
      <Row>
        {services.map((service) => {
          const { name, icon, color, description } = service;
          return (
            <Col key={name}>
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
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Solutions;
