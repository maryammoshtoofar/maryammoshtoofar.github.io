import Nav from "react-bootstrap/Nav";
import NavIcon from "./nav-icon";
import { navIcons } from "config/constants";
import { useState } from "react";
const NavBar = ({ setMobileToggle }) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <Nav>
      {navIcons.map((item) => (
        <NavIcon
          setMobileToggle={setMobileToggle}
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
