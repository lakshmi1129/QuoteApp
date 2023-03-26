import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';


function Header() {
  return (
    <div> 

    <Navbar collapseOnSelect expand="lg"  >
      <Container>
        <Navbar.Brand href="/" style={{color:'white'}}>Home</Navbar.Brand>
            <Nav.Link style={{color:'white'}} eventKey={2} href="/bookmark">
             Bookmarks
            </Nav.Link>
        
      </Container>
    </Navbar>
 


   
    </div>
  )
}

export default Header