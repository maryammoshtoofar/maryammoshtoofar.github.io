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
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">
        <House />
        Home
      </Nav.Link>
      <Nav.Link eventKey="link-1">
        <Person />
        About
      </Nav.Link>
      <Nav.Link eventKey="link-2">
        <FileEarmark />
        Resume
      </Nav.Link>
      <Nav.Link eventKey="disabled">
        <WindowSidebar />
        Portfolio
      </Nav.Link>
      <Nav.Link eventKey="disabled">
        <HddStack />
        Services
      </Nav.Link>
      <Nav.Link eventKey="disabled">
        <Envelope />
        Contact
      </Nav.Link>
    </Nav>
  );
};

export default NavBar;
