import { Col, Container, Row } from "react-bootstrap";
import SocialMediaIcons from "./SocialMediaIcons";

import logo from "../assets/img/logo-01.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" className="footer-logo"/>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <SocialMediaIcons />
            <p>© 2024 - Man Chun Lam. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
