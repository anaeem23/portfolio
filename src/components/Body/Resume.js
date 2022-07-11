import React from "react";

export default function Resume() {
  return (
    <div>
      <h1 className="text-white"> Skills</h1>

      <div class="container text-white">
        <div class="row">
          <div class="col">
            <h4>HTML</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Basic/Advanced HTML</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div class="col">
            {" "}
            <h4>CSS</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>CSS3</li>
            </ul>
          </div>

          <div class="col">
            {" "}
            <h4>JavaScript</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Express.js</li>
              <li>React.js</li>
              <li>PWA</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div class="col">
            {" "}
            <h4>DataBase </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Database Theory</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
