import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../Nav/CustomLink';
import './Nav.css'

const Navber = () => {
  const [user] = useAuthState(auth);
  

  const singout = () => {
    signOut(auth);
  };
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
    {
          user?<button onClick={singout} className='btn btn-singout'>Sign Out</button>
          :
          <CustomLink to='/login' >Login</CustomLink>
        
        }
        {
          user?'':<CustomLink to='/signup' >Sign Up</CustomLink>
        }
        
    
   
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Navber;