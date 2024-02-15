import { motion, MotionConfig } from "framer-motion";

import linkedinBw from "../assets/img/linkedin-bw.png";
import instagramBw from "../assets/img/instagram-bw.png";
import githubBw from "../assets/img/github-bw.png";

export default function SocialMediaIcons() {
  return (
    <div className="social-icon">
      <MotionConfig transition={{ type: "spring", duration: 0.4 }}>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/man-chun-lam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinBw} alt="linkedin" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/davidsamtom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubBw} alt="github" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.instagram.com/davidlam_1111/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramBw} alt="instagram" />
        </motion.a>
      </MotionConfig>
    </div>
  );
}
