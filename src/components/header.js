import React from "react";
import { Nav } from "react-bootstrap";


export default function Header () {

    return (
        <>
        <Nav 
        varient="pills"
        activeKey="/home"
        onSelect={(key)=>{console.log(key)}}
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

        <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

        </>
    )

}