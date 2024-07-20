import Nav from "react-bootstrap/Nav";
import NavIcon from "./nav-icon";
import { navIcons } from "config/constants";

const NavBar = ({ setMobileToggle }) => {
  return (
    <Nav>
      {navIcons.map((item) => (
        <NavIcon
          setMobileToggle={setMobileToggle}
          type={item}
          key={item.name}
        />
      ))}
    </Nav>
  );
};

export default NavBar;
