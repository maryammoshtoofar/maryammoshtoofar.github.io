import { TextRight, XCircleFill } from "react-bootstrap-icons";
import { useEffect } from "react";

const MobileNavToggle = ({ mobileToggle, setMobileToggle }) => {
  
  const toggleNavBar = (e) => {
    e.stopPropagation();
    if (mobileToggle === "nav-bar closed") setMobileToggle("nav-bar open");
    else setMobileToggle("nav-bar closed");
    document.body.classList.toggle("mobile-nav-active");
  };

  return (
    <>
      {mobileToggle === "nav-bar closed" && (
        <TextRight
          className="mobile-nav-toggle"
          size={40}
          onClick={toggleNavBar}
        />
      )}
      {mobileToggle === "nav-bar open" && (
        <XCircleFill
          className="mobile-nav-toggle close"
          size={40}
          onClick={toggleNavBar}
        />
      )}
    </>
  );
};

export default MobileNavToggle;
