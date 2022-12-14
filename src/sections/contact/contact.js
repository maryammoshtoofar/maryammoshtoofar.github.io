import { Col, Row, Button } from "react-bootstrap";
import { GeoAlt, Envelope, Phone } from "react-bootstrap-icons";
const Contact = () => {
  const iconSize = 20;
  const contactInfo = {
    Location: "South Karoon , Tehran ,Iran",
    Email: "maryammoshtoofar@gmail.com",
    Call: "+98 937 460 1954",
  };
  const { Location, Email, Call } = contactInfo;
  return (
    <section className="section contact" id="Contact">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <Row>
        <Col className="infos" xs={4}>
          <div className="info">
            <div>
              <div className="icon-container">
                <Envelope size={iconSize} />
              </div>
            </div>
            <div>
              <h4>Location:</h4>
              <p>{Location}</p>
            </div>
          </div>
          <div className="info">
            <div>
              <div className="icon-container">
                <GeoAlt size={iconSize} />
              </div>
            </div>
            <div>
              <h4>Email:</h4>
              <p>{Email}</p>
            </div>
          </div>
          <div className="info">
            <div>
              <div className="icon-container">
                <Phone size={iconSize} />
              </div>
            </div>
            <div>
              <h4>Call:</h4>
              <p>{Call}</p>
            </div>
          </div>
        </Col>
        <Col>
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
          >
            <Row>
              <Col>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </Col>
              <Col>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </Col>
            </Row>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <div className="message">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="button-container">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
