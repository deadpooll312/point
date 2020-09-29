import policeIcon from "../img/svg/police.svg";
import searchIcon from "../img/svg/search.svg";
import securityIcon from "../img/svg/security-logo.svg";

export const hashes = {
  CHALLENGES: "#challenges",
  HISTORY: "#history",
  SECURITY: "#security",
};

export const sidebarTabs = [
  {
    title: "ВЫЗОВЫ",
    img: policeIcon,
    id: 0,
    hash: hashes.CHALLENGES,
  },
  {
    title: "ИСТОРИЯ",
    img: searchIcon,
    id: 1,
    hash: hashes.HISTORY,
  },
  {
    title: "ЧОП",
    img: securityIcon,
    id: 2,
    hash: hashes.SECURITY,
  },
];
