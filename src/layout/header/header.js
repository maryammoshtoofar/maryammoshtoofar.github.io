import NavBar from "components/nav/nav-bar";

const Header = ({ setMobileToggle }) => {
  return (
    <header className="header">
      <NavBar setMobileToggle={setMobileToggle} />
    </header>
  );
};

export default Header;
