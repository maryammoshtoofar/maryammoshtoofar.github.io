import Nav from "react-bootstrap/Nav";
import {
  House,
  Person,
  FileEarmark,
  HddStack,
  Envelope,
  WindowSidebar,
} from "react-bootstrap-icons";
const NavBar = () => {
  const iconSize = 22;
  return (
    <Nav defaultActiveKey="/home" className="nav-bar">
      <Nav.Link href="/home">
        <House size={iconSize} />
        <span>Home</span>
      </Nav.Link>
      <Nav.Link eventKey="link-1">
        <Person size={iconSize} />
        <span>About</span>
      </Nav.Link>
      <Nav.Link eventKey="link-2">
        <FileEarmark size={iconSize} />
        <span>Resume</span>
      </Nav.Link>
      <Nav.Link eventKey="disabled">
        <WindowSidebar size={iconSize} />
        <span>Portfolio</span>
      </Nav.Link>
      <Nav.Link eventKey="disabled">
        <HddStack size={iconSize} />
        <span>Services</span>
      </Nav.Link>
      <Nav.Link eventKey="disabled">
        <Envelope size={iconSize} />
        <span>Contact</span>
      </Nav.Link>
    </Nav>
  );
};

export default NavBar;
