import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              A passionate software developer with a love for crafting clean and
              efficient code. Enjoy in building innovative and intersting
              projects. I excel in React.js and Python, and my journey is
              fueled by a curiosity for solving complex problems. Let's create
              something extraordinary together!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
