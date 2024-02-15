import { Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import Container from "react-bootstrap/Container";
import HeaderTabs from "./HeaderTabs";
import SocialMediaIcons from "./SocialMediaIcons";
import Button from "./Button";

import navLogo from "../assets/img/logo-02.png";


export default function Header() {
  const [selectedType, setSelectedType] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = debounce(function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      updateActiveLink();
    }, 70);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const navBar = document.querySelector(".navbar");
    const offset = navBar ? navBar.getBoundingClientRect().height : 0;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const rect = section.getBoundingClientRect();

      if (rect.top - offset <= 50 && rect.bottom >= 50 - offset) {
        setSelectedType(sectionId);
      }
    });
  }

  function handleSelectType(newType) {
    setSelectedType(newType);
    setExpanded(false);
  }

  function handleDropdownMenu() {
    setExpanded(!expanded);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={expanded}>
      <Container>
        <img
          src={navLogo}
          alt="Logo"
          className="logo object-contain w-80 h-auto"
        />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle"
          onClick={handleDropdownMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <HeaderTabs
              onSelectType={handleSelectType}
              selectedType={selectedType}
            />
          </Nav>
          <span className="navbar-text d-none d-md-flex">
            <SocialMediaIcons />
            <Nav.Link href="#connect">
              <Button>Let&apos;s Connect</Button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
