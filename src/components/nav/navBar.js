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
        <span className="nav-icon">
          <House size={iconSize} />
        </span>
        <span className="nav-text">Home</span>
      </Nav.Link>
      <Nav.Link>
        <span className="nav-icon">
          <Person size={iconSize} />
        </span>
        <span className="nav-text">About</span>
      </Nav.Link>
      <Nav.Link>
        <span className="nav-icon">
          <FileEarmark size={iconSize} />
        </span>
        <span className="nav-text">Resume</span>
      </Nav.Link>
      <Nav.Link>
        <span className="nav-icon">
          <WindowSidebar size={iconSize} />
        </span>
        <span className="nav-text">Portfolio</span>
      </Nav.Link>
      <Nav.Link>
        <span className="nav-icon">
          <HddStack size={iconSize} />
        </span>
        <span className="nav-text">Services</span>
      </Nav.Link>
      <Nav.Link>
        <span className="nav-icon">
          <Envelope size={iconSize} />
        </span>
        <span className="nav-text">Contact</span>
      </Nav.Link>
    </Nav>
  );
};

export default NavBar;
