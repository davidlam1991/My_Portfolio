import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import portImg1 from "../assets/img/portfoliopic1.png";
import portImg2 from "../assets/img/portfoliopic2.png";

export default function Banner() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isHovered, setIsHovered] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["A Frontend Developer", "A Backend Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 200);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(70);
    }
  };

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const avatarImage = isHovered ? portImg2 : portImg1;

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              <span>Hi I&apos;m David Lam, </span>
            </h1>
            <h1>
              <span className="wrap">{!text ? "A" : text}</span>
            </h1>
            {isMobile ? (
              <>
                <p>Enthusiastic | Creative</p>
                <p>Forward-thinking | Adaptability</p>
                <p>Problem-solving</p>
              </>
            ) : (
              <>
                <p>Enthusiastic | Creative | Forward-thinking</p>
                <p>Adaptability | Problem-solving</p>
              </>
            )}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={avatarImage}
              alt="profile1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
