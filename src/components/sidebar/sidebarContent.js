// src/sidebarContent.js
import { CiSettings, CiHome, CiCircleQuestion, CiUser } from "react-icons/ci"; // Import other icons as needed
import { PiBinoculars } from "react-icons/pi";
import { MdLibraryBooks } from "react-icons/md";

const sidebarContent = [
  {
    title: "Explore",
    icon: <PiBinoculars />, // Example icon
    subItems: [],
    link: "/explore",
  },
  {
    title: "Definitions",
    icon: <MdLibraryBooks />, // Example icon
    subItems: [],

    link: "/definitions",
  },
  {
    title: "Settings",
    icon: <CiSettings />, // Example icon
    subItems: [],

    link: "/settings",
  },
  {
    title: "Help",
    icon: <CiCircleQuestion />, // Example icon
    subItems: [],

    link: "/help",
  },
];

export default sidebarContent;
