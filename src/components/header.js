import React from "react";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import Render from "./Body/index";
import Footer from "./footer";


export default function Header ({setPage}) {


    return (
        <div className="bg-dark">
        <div className="bg-dark m-0 text-white">
        <h1 className="fw-bold Name">Abeer Naeem</h1>
        <h4 className="fw-lighter m-0">Software Developer</h4>
        <h6>Email: abeernaeem6@gmail.com</h6>
        </div>
        <Nav 
        className="bg-dark text-white Nav"
        variant="pills"
        defaultActiveKey={'AboutMe'}
        onSelect={(key)=>{setPage(key) 
            console.log(key)}}
        >
            <Nav.Item>
                <Nav.Link eventKey={'AboutMe'}> About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={'Portfolio'}> Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={'Contact'}> Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={'Resume'}> Resume</Nav.Link>
            </Nav.Item>
        </Nav>

        </div>
    )

}

