import Nav from "react-bootstrap/Nav";
import NavIcon from "./nav-icon";
import { navIcons } from "config/constants";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink("Home");
  }, []);
  return (
    <Nav className="nav-bar">
      {navIcons.map((item) => (
        <NavIcon
          type={item}
          key={item.name}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      ))}
    </Nav>
  );
};

export default NavBar;
