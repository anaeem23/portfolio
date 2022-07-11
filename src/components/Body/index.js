import React from "react";
import { Figure } from "react-bootstrap";
import myImage from "../../Assets/ProfilePic.jpeg";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

export default function Render(props) {
  if (props.currentPage === "AboutMe") {
    return <AboutMe />;
  } else if (props.currentPage === "Portfolio") {
    return <Portfolio />;
  } else if (props.currentPage === "Contact") {
    return <Contact />;
  } else if (props.currentPage === "Resume") {
    return <Resume />;
  } else {
    return "Failed";
  }
}
