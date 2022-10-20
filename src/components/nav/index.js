import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">
        <i class="bx bx-home"></i>
        Home
      </Nav.Link>
      <Nav.Link eventKey="link-1">About</Nav.Link>
      <Nav.Link eventKey="link-2">Resume</Nav.Link>
      <Nav.Link eventKey="disabled">Portfolio</Nav.Link>
      <Nav.Link eventKey="disabled">Services</Nav.Link>
      <Nav.Link eventKey="disabled">Contact</Nav.Link>
    </Nav>
  );
}

export default NavBar;
