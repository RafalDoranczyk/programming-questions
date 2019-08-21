import { theme } from "theme";
import reduxIcon from "@iconify/icons-simple-icons/redux";
import htmlFive from "@iconify/icons-icomoon-free/html-five";
import css3Icon from "@iconify/icons-simple-icons/css3";
import javascriptIcon from "@iconify/icons-simple-icons/javascript";
import reactIcon from "@iconify/icons-simple-icons/react";
import gitIcon from "@iconify/icons-simple-icons/git";
import nodeJs from "@iconify/icons-fa-brands/node-js";
import pythonIcon from "@iconify/icons-fa-brands/python";
import sassIcon from "@iconify/icons-fa-brands/sass";
import djangoIcon from "@iconify/icons-simple-icons/django";
export const BUTTON_MODELS = [
  { technology: "HTML", icon: htmlFive, color: theme.HTML },
  { technology: "CSS", icon: css3Icon, color: theme.CSS },
  { technology: "Sass", icon: sassIcon, color: theme.Sass },
  {
    technology: "JavaScript",
    icon: javascriptIcon,
    color: theme.JavaScript
  },
  { technology: "React", icon: reactIcon, color: theme.React },
  { technology: "GIT", icon: gitIcon, color: theme.GIT },
  { technology: "NODE", icon: nodeJs, color: theme.NODE },
  { technology: "Redux", icon: reduxIcon, color: theme.Redux },
  { technology: "Python", icon: pythonIcon, color: theme.Python },
  { technology: "Django", icon: djangoIcon, color: theme.Django }
];
