import React from "react";
import { Figure } from "react-bootstrap";
import myImage from "../../Assets/ProfilePic.jpeg";

export default function AboutMe() {
  return (
    <>
      <div className="bg-black">
        <h4 className="text-white titlePlus"> About Me</h4>
        <Figure className="">
          <Figure.Image
            width={300}
 
            className="rounded float-start"
            src={myImage}
          />
        </Figure>

        <p className="text-white m-4 aboutMe"> I am a recent graduate who is learing web development to increase my skills and understanding of web development. My undergrad was in Mechanical Engineering and I also possess a Master's in Mechanical & Aerospace. I hope to combine my knoweledge of Mechanical Engineering with Web Development to be valuable to any future employers</p>
      </div>
    </>
  );
}
