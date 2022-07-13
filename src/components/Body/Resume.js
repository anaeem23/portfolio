import React from "react";
import { Button } from "react-bootstrap";
import ANresume from "../../Assets/Abeer_Naeem_Resume.pdf"


export default function Resume() {
  return (
    <div>
      <h1 className="text-white titlePlus"> Skills</h1>

      <div class="container text-white">
        <div class="row skills">
          <div class="col">
            <h4 className="title">HTML</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Basic/Advanced HTML</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div class="col">
            {" "}
            <h4 className="title">CSS</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>CSS3</li>
            </ul>
          </div>

          <div class="col">
            {" "}
            <h4 className="title">JavaScript</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Express.js</li>
              <li>React.js</li>
              <li>PWA</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div class="col">
            {" "}
            <h4 className="title">DataBase </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Database Theory</li>
            </ul>
          </div>
        </div>
      </div>
      <Button variant="dark"><a href={ANresume} download="Abeer Naeem Resume" style={{textDecoration:'none'}}> Resume</a></Button>

    </div>
  );
}
