import { Link, animateScroll as scroll } from "react-scroll";
const NavIcon = ({ type }) => {
  const { name, component } = type;
  return (
    <Link
      activeClass="active"
      to={name}
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      className="nav-link"
    >
      <span className="nav-icon ">{component}</span>
      <span className="nav-text">{name}</span>
    </Link>
  );
};

export default NavIcon;
