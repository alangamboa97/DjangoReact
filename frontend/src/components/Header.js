import React from 'react'

import { Nav, Navbar, Container, Row} from 'react-bootstrap'
const Header = () => {
    return (
        <div>
            <header> 
            <Navbar bg="dark" variant = 'dark' collapseOnSelect expand="lg">
                <Container>
  <Navbar.Brand href="#home">React-Django</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><i className = 'fas fa-shopping-cart'></i> Cart</Nav.Link>
      <Nav.Link href="#link"><i className = 'fas fa-user'></i> Login</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
            </header>
        </div>
    )
}

export default Header
