import { Col, Row, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImage from "../assets/img/project-img1.png";

export default function Projects() {
  const projects = [
    {
      title: "My Portfolio",
      descriptions: ["React", "Node.js", "Framer Motion", "CSS", "Bootstrap"],
      imgUrl: projImage,
    },
    {
      title: "Project 1",
      descriptions: ["React", "Node.js", "Framer Motion", "CSS", "Bootstrap", "Bootstrap", "Bootstrap", "Bootstrap", "Bootstrap", "Bootstrap"],
      imgUrl: projImage,
    },
    {
      title: "Project 1",
      descriptions: ["React", "Node.js", "Framer Motion", "CSS", "Bootstrap"],
      imgUrl: projImage,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <Row>
              <h2>Projects</h2>
            </Row>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

    </section>
  );
}
