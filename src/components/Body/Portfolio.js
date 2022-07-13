import React from "react";
import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Projects from "./Projects";
import Resume from "../../Assets/Abeer_Naeem_Resume.pdf"

export default function Portfolio() {


  return (
    <div>
      {Projects.map((project) => ( 
        <Card className="m2" style={{ width:"30rem", display:"inline-flex", marginRight:"30px", marginBottom:"10px"}}>
          <Card.Img src={project.projectImg} width="50%" />
          <Card.Body>
            <Card.Title>{project.projectName}</Card.Title>
            <Button href={project.projectLink} style={{marginRight:"5px"}}>App</Button> 
            <Button href={project.projectRepo}>Github Repo</Button>
          </Card.Body>
        </Card>

      
      ))}

    </div>
  );
}
