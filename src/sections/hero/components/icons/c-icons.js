import { Instagram, Github, Telegram, Linkedin } from "react-bootstrap-icons";
const Icons = () => {
  const socialLinks = {
    github: "https://github.com/maryammoshtoofar",
    instagram: "https://instagram.com/maryammoshtoofar",
    linkedin: "https://linkedin.com/maryammoshtoofar",
    telegram: "https://telegram.com/maryammoshtoofar",
  };

  const iconSize = 22;
  return (
    <div className="icon-group">
      <a rel="noreferrer" target="_blank" href={socialLinks.github}>
        <Github size={iconSize} />
      </a>
      <a rel="noreferrer" target="_blank" href={socialLinks.telegram}>
        <Telegram size={iconSize} />
      </a>
      <a rel="noreferrer" target="_blank" href={socialLinks.linkedin}>
        <Linkedin size={iconSize} />
      </a>
      <a rel="noreferrer" target="_blank" href={socialLinks.instagram}>
        <Instagram size={iconSize} />
      </a>
    </div>
  );
};

export default Icons;
