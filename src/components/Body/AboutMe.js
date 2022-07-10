import React from "react";
import { Figure } from "react-bootstrap";
import myImage from "../../Assets/ProfilePic.jpeg";

export default function AboutMe() {
  return (
    <>
      <div className="bg-black">
        <h4 className="text-white"> About Me</h4>
        <Figure className="">
          <Figure.Image
            width={171}
            height={180}
            className="rounded float-start"
            src={myImage}
          />
        </Figure>

        <p className="text-white m-0"> LMAO</p>
      </div>
    </>
  );
}
