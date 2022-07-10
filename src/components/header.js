import React from "react";
import { Nav } from "react-bootstrap";
import { useState } from "react";


export default function Header () {

    const [page, setPage] = useState("About")

    return (
        <>
        <div className="bg-dark m-0 text-white">
        <h1 className="fw-bold">Abeer Naeem</h1>
        <h6 className="fw-lighter m-0">Software Developer</h6>
        </div>
        <Nav 
        className="bg-dark text-white"
        variant="pills"
        defaultActiveKey={'AboutMe'}
        onSelect={(key)=>{setPage(key)}}
        >
            <Nav.Item>
                <Nav.Link eventKey={'AboutMe'}> About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={'Portfolio'}> Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={'Resume'}> Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={'Contact'}> Contact</Nav.Link>
            </Nav.Item>
        </Nav>


        </>
    )

}