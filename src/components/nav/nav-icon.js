import { Link } from "react-scroll";
const NavIcon = ({
  setMobileToggle,
  type,
  setActiveLink,
}) => {
  const { name, component } = type;
  const handleScrollToSection = (e) => {
    setActiveLink(e.currentTarget.children[1].innerHTML);
    if (document.body.classList.contains("mobile-nav-active")) {
      document.body.classList.remove("mobile-nav-active");
      setMobileToggle("nav-bar closed");
    }
  };


  return (
    <Link
      onClick={handleScrollToSection}
      activeClass="active"
      to={name}
      spy={true}
      smooth={true}
      duration={500}
      className="nav-link"
      offset={name === "Home" ? -250 : 0}
    >
      <span className="nav-icon ">{component}</span>
      <span className="nav-text">{name}</span>
    </Link>
  );
};

export default NavIcon;
