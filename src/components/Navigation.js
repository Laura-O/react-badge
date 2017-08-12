import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

function Navigation() {
  return(
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Home</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="/competitors">Competitors</NavItem>
    </Nav>
  </Navbar>
  )
}

export default Navigation;