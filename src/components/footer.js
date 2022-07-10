import React from "react";
import { Nav } from "react-bootstrap";


export default function Footer () {

    return (
        <>
        <Nav 
        className="bg-dark text-white"
        onSelect={(key)=>{console.log(key)}}
        >
            <Nav.Item>
                <Nav.Link href={'https://github.com/'}> Github</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={'https://www.linkedin.com/'}> LinkedIn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={'https://twitter.com/?lang=en'}> Twitter</Nav.Link>
            </Nav.Item>
        </Nav>


        </>
    )

}