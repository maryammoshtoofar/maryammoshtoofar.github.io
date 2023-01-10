import Icon from "../icon/hero-icon";
import { heroIcons } from "config/constants";
const Icons = () => {
  return (
    <div className="social-links">
      {heroIcons.map((link) => (
        <Icon type={link} key={link.name} />
      ))}
    </div>
  );
};

export default Icons;
