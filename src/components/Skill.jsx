import { Col, Row } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import python from "../assets/img/skills/python.png";
import js from "../assets/img/skills/js.png";
import react from "../assets/img/skills/react.png";
import cSharp from "../assets/img/skills/c-sharp.png";
import java from "../assets/img/skills/java.png";
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import node from "../assets/img/skills/node.png";
import redux from "../assets/img/skills/redux.svg";
import framerMotion from "../assets/img/skills/framer-motion.svg";
import tailwind from "../assets/img/skills/tailwind.png";
import firebase from "../assets/img/skills/firebase.png";
import mongoDb from "../assets/img/skills/mongodb.svg";
import postman from "../assets/img/skills/postman.svg";
import flask from "../assets/img/skills/flask.png";
import selenium from "../assets/img/skills/selenium.png";
import sql from "../assets/img/skills/sql.png";
import git from "../assets/img/skills/git.svg";

export default function Skill() {
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const ySkillsWeb = useTransform(scrollY, [600, 1800], [0, 0]);
  const opacitySkillsWeb = useTransform(
    scrollY,
    [600, 1000, 1400, 1800],
    [0, 1, 1, 0]
  );

  const ySkillsMobile = useTransform(scrollY, [700, 2410], [0, 0]);
  const opacitySkillsMobile = useTransform(scrollY, [700, 1400, 1900, 2410], [0, 1, 1, 0]);

  const skillSet = [
    [
      { skill: "Python", image: python },
      { skill: "JavaScript", image: js },
      { skill: "React", image: react },
      { skill: "C#", image: cSharp },
      { skill: "Java", image: java },
      { skill: "Node", image: node },
    ],
    [
      { skill: "HTML", image: html },
      { skill: "CSS", image: css },
      { skill: "Redux", image: redux },
      { skill: "Framer Motion", image: framerMotion },
      { skill: "Postman", image: postman },
      { skill: "Git", image: git },
    ],
    [
      { skill: "Tailwind CSS", image: tailwind },
      { skill: "Flask", image: flask },
      { skill: "Selenium", image: selenium },
      { skill: "Firebase", image: firebase },
      { skill: "MongoDb", image: mongoDb },
      { skill: "SQL", image: sql },
    ],
    [],
  ];

  return (
    <>
      {skillSet.map((sets, index) => (
        <Row key={index} className="skill-table">
          {sets.map((skill, i) => (
            <Col key={i}>
              <motion.div
                className="skill-item"
                transition={{ type: "spring" }}
                style={{
                  opacity: isMobile ? opacitySkillsMobile : opacitySkillsWeb,
                  y: isMobile ? ySkillsMobile : ySkillsWeb,
                }}
              >
                <img src={skill.image} alt={skill.skill} />
                <p>{skill.skill}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}
