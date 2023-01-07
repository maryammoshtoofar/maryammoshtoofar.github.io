import { Col, Row } from "react-bootstrap";
import { GeoAlt, Envelope, Phone } from "react-bootstrap-icons";
import { useState } from "react";
import axiosInstance from "api/http";
import { FORM_SUBMIT_URL } from "config/api";
import Iframe from "./components/iFrame";
import SubmitButton from "./components/submitButton";
const Contact = () => {
  const iconSize = 20;
  const contactInfo = {
    Location: "South Karoon , Tehran ,Iran",
    Email: "maryammoshtoofar@gmail.com",
    Call: "+98 937 460 1954",
  };
  const { Location, Email, Call } = contactInfo;
  const [redirectURL, setRedirectURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newSubmission = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    const data = new FormData(e.target);
    for (let field of data.entries()) {
      newSubmission[field[0]] = field[1];
    }
    axiosInstance
      .post(FORM_SUBMIT_URL, newSubmission)
      .then(() => {
        setRedirectURL("https://mailthis.to/confirm");
        setIsLoading(false);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Row>
              <Col>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </Col>
              <Col>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Col>
            </Row>
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <div className="button-container">
              <SubmitButton isLoading={isLoading} />
            </div>
          </form>
        </Col>
        <Iframe url={redirectURL}></Iframe>
      </Row>
    </section>
  );
};

export default Contact;
