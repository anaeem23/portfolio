import React from "react";
import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Projects from "./Projects";

export default function Portfolio() {
  return (
    <>
      {Projects.map((project) => (
        <Card>
          <Card.Img src={project.projectImg} />
          <Card.Body>
            <Card.Title>{project.projectName}</Card.Title>
            <Button href={project.projectLink}>App</Button>
            <Button href={project.projectRepo}>Github Repo</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
