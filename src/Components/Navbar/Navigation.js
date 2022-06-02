import React from "react";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'

function Navigation() {
  return (
    <Nav variant="tabs" defaultActiveKey="/main">
      <Nav.Item>
        <Nav.Link href="/main">Main</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="favourites">Favourites</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
