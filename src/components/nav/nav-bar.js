import Nav from "react-bootstrap/Nav";
import NavIcon from "./nav-icon";
import { navIcons } from "config/constants";
import { useState , useEffect } from "react";
const NavBar = ({ setMobileToggle }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    console.log(activeLink);
  }, [activeLink]);

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
