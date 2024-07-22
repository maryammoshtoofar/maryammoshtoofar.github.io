import { Col, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
const PersonalDetails = () => {
  const iconSize = 18;
  const PersonalInfo = {
    Birthday: "27 March 1995",
    Phone: "+98 937 460 1954",
    Email: "maryammoshtoofar@gmail.com",
    Counrty: "Iran",
    City: "Tehran",
    English: "Proficient",
    Freelance: "Available",
    Offers: " YES!",
  };
  return (
    <Col lg={8}>
      <h4>Full-stack Develeoper (JS, Next, Node)</h4>
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
          I believe in learning by doing and that a good laugh can solve most
          bugs (or at least make them more bearable). If you're looking for a
          developer who brings both skill and a smile, let's connect and build
          something awesome together! Drop me a line through my e-mail or
          Telegram account above or below! You can also check out my Github.
        </Row>
      </Row>
    </Col>
  );
};

export default PersonalDetails;
