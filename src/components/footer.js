import React from "react";
import { Nav } from "react-bootstrap";


export default function Footer () {

    return (
        <div>
        <Nav 
        className="bg-dark text-white footer"
        onSelect={(key)=>{console.log(key)}}
        >

         < div className="m-auto d-inline-flex text-lg">
              <Nav.Item>
                <Nav.Link  href={'https://github.com/'}> <h3>Github</h3></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={'https://www.linkedin.com/'}><h3>LinkedIn</h3> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={'https://twitter.com/?lang=en'}><h3>Twitter</h3> </Nav.Link>
            </Nav.Item>
            </div>
        </Nav>


        </div>
    )

}