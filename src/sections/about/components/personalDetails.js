import { Col, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
const PersonalDetails = () => {
  const iconSize = 18;
  const PersonalInfo = {
    Birthday: "27 March 1995",
    Phone: "+98 937 460 1954",
    Email: "maryammoshtoofar@gmail.com",
    Counrty: "Canada",
    City: "Toronto",
    English: "Proficient",
    Freelance: "Available",
    Offers: " YES!",
  };
  return (
    <Col lg={8}>
      <h4>Front-end Develeoper (React)</h4>
      <Row>
        <Col>
          <dl>
            {Object.entries(PersonalInfo).map((item) => (
              <dd className={`info ${item[0]}`} key={item[0]}>
                <ChevronRight size={iconSize} />
                <strong>{item[0]}: </strong>
                {item[1]}
              </dd>
            ))}
          </dl>
        </Col>
        <Row>
          I'm currently working on a full E-Commerce Website for my portfolio
          using React, Typescript and ANTDesign. I'm excited to make the leap
          and continue refining my skills with the right company. Drop me a line
          through my e-mail or Telegram account above or below! You can also
          check out my Github.
        </Row>
      </Row>
    </Col>
  );
};

export default PersonalDetails;
