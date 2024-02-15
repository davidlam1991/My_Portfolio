import { Container, Row } from "react-bootstrap";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section className="skill" id="skills">
      <Container className="skill-bx">
        <Row>
          <h2>Skills</h2>
        </Row>
        <Skill />
      </Container>
    </section>
  );
}
