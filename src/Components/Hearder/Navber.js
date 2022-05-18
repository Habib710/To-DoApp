import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../Nav/CustomLink';
import './Nav.css'

const Navber = () => {
    return (
        <div>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className='costom' >To-DoApp</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="costom-css ms-auto">
    <CustomLink to='/home' >Home</CustomLink>
    <CustomLink to='/add' >Add Task</CustomLink>
    <CustomLink to='/my' >My Task</CustomLink>
    <CustomLink to='/login' >Login</CustomLink>
    <CustomLink to='/signup' >Sign Up</CustomLink>
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Navber;