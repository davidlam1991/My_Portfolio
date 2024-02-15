import Tab from "./Tab";
import Nav from "react-bootstrap/Nav";

export default function HeaderTabs({ selectedType, onSelectType }) {
  return (
      <menu id="tabs">
        <Nav.Link href="#home">
          <Tab
            isSelected={selectedType === "home"}
            onSelect={() => onSelectType("home")}
          >
            Home
          </Tab>
        </Nav.Link>
        <Nav.Link href="#about">
          <Tab
            isSelected={selectedType === "about"}
            onSelect={() => onSelectType("about")}
          >
            About
          </Tab>
        </Nav.Link>
        <Nav.Link href="#skills">
          <Tab
            isSelected={selectedType === "skills"}
            onSelect={() => onSelectType("skills")}
          >
            Skills
          </Tab>
        </Nav.Link>
        <Nav.Link href="#projects">
          <Tab
            isSelected={selectedType === "projects"}
            onSelect={() => onSelectType("projects")}
          >
            Projects
          </Tab>
        </Nav.Link>
      </menu>
  );
}
