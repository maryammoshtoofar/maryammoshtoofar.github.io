import { Instagram, Github, Telegram, Linkedin } from "react-bootstrap-icons";
import {
  House,
  Person,
  FileEarmark,
  HddStack,
  Envelope,
  WindowSidebar,
} from "react-bootstrap-icons";

export const HeroTitles = [
  " Developer",
  1000,
  " Bootcamp TA",
  2000,
  " Freelancer",
  1000,
];
const heroSize = 18;
export const heroIcons = [
  {
    name: "Github",
    href: "https://github.com/maryammoshtoofar",
    component: <Github size={heroSize} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/maryammoshtoofar/",
    component: <Instagram size={heroSize} />,
  },
  {
    name: "Telegram",
    href: "https://t.me/maryammoshtoofar",
    component: <Telegram size={heroSize} />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/maryammoshtoofar/",
    component: <Linkedin size={heroSize} />,
  },
];

const navSize = 18;
export const navIcons = [
  { name: "Home", component: <House size={navSize} /> },
  { name: "About", component: <Person size={navSize} /> },
  { name: "Resume", component: <FileEarmark size={navSize} /> },
  { name: "Portfolio", component: <WindowSidebar size={navSize} /> },
  { name: "Services", component: <HddStack size={navSize} /> },
  { name: "Contact", component: <Envelope size={navSize} /> },
];
