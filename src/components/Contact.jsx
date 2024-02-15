import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "./Button";
import ContactInfo from "./ContactInfo";

import locationIcon from "../assets/img/contact-location.png";
import emailIcon from "../assets/img/contact-email.png";
import phoneIcon from "../assets/img/contact-phone.png";

export default function Contact() {
  const formInitialDetails = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  function onFormUpdate(category, value) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  const handleSubmit = async function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");

      if (response.status === 200) {
        const result = await response.json();
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        console.log(response.status);
        setStatus({
          success: false,
          message: "Something went wrong, please try again later",
        });
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <ContactInfo icon={locationIcon} title="ADDRESS">North York, Toronto</ContactInfo>
            <ContactInfo icon={emailIcon} title="EMAIL">davidlam_1991@hotmail.com</ContactInfo>
            <ContactInfo icon={phoneIcon} title="TELEPHONE">+1 (437) 559-2447</ContactInfo>
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="full name"
                    value={formDetails.fullName}
                    placeholder="Full Name"
                    onChange={(e) => onFormUpdate("fullName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email *"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col md={12} className="px-1">
                  <input
                    type="text"
                    name="subject"
                    value={formDetails.subject}
                    placeholder="Subject"
                    onChange={(e) => onFormUpdate("subject", e.target.value)}
                  />
                </Col>
                <Col md={12} className="px-1">
                  <textarea
                    row="6"
                    type="text"
                    name="message"
                    value={formDetails.message}
                    placeholder="Message *"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  ></textarea>
                  <Button type="submit">{buttonText}</Button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
