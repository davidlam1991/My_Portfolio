import { Col } from "react-bootstrap";
import { motion, MotionConfig } from "framer-motion";

import githubLink from "../assets/img/link-github.png";
import wwwLink from "../assets/img/link-www.png";

export default function ProjectCard({ title, descriptions, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <motion.div
        className="proj-imgbx"
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          damping: 5,
          duration: 0.25,
        }}
      >
        <img src={imgUrl} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <ul>
            {descriptions.map((des, index) => (
              <li key={index}>{des}</li>
            ))}
          </ul>
        </div>
      </motion.div>
      <MotionConfig transition={{ type: "spring", duration: 0.4 }}>
        <div className="proj-link">
          <motion.a whileHover={{ scale: 1.2 }} className="link-img" href="">
            <img src={githubLink} alt="github link" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} className="link-img" href="">
            <img src={wwwLink} alt="website link" />
          </motion.a>
        </div>
      </MotionConfig>
    </Col>
  );
}
