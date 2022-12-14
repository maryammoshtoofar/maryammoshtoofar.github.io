import Icon from "../icon/hero-icon";
import { heroIcons } from "config/constants";
const Icons = () => {
  return (
    <div className="icon-group">
      {heroIcons.map((link) => (
        <Icon type={link} key={link.name} />
      ))}
    </div>
  );
};

export default Icons;
