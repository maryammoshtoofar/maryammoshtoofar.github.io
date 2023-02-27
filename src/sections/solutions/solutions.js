import { Container, Col, Row } from "react-bootstrap";
import ServiceCard from "./components/service-card";

const Solutions = () => {
  const services = [
    {
      id: 1,
      name: "Development",
      icon: "CodeSlash",
      color: "#007aff",
      description:
        "Having agreed on the look and feel of a web app with the team , I can help bring it to life with front-end coding.",
    },
    {
      id: 2,
      name: "Maintenance",
      icon: "Tools",
      color: "#e80368",
      description:
        "I can assist with advancing your web-based software to keep it efficient and compliant with all your evolving business needs.",
    },
    {
      id: 3,
      name: "Optimization",
      icon: "BarChartFill",
      color: "#ffc107",
      description:
        "I can help provide high availability and trouble-free functionality of your web app and resolve issues in usage and technology",
    },
  ];

  return (
    <Container className="section solutions" id="Services">
      <div className="section-title">
        <h2>Services</h2>
      </div>
      <Row>
        {services.map((service) => (
          <Col>
            <ServiceCard key={service.name} service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Solutions;
