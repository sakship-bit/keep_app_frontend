import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import './header.css'


const Header=()=>{

    return(<>
    <Navbar bg="dark" expand="lg" style={{position:"sticky",display:"flex"}}>
      <Container fluid>
        <Navbar.Brand href="/"><div className='row col-12'><div className='parent'  style={{display:'flex',color:'white'}}><span className="material-icons mt-1 ">home</span>&nbsp;&nbsp;Keep Notes</div></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Link to="/about" className='ms-5 text-white text-decoration-none'>About</Link>
            <Link to="/newsfeed" className='ms-5 text-white text-decoration-none'>News Feed</Link>

            {/* <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <Form className="d-flex">
          <Link to="/login" className='ms-5 text-white text-decoration-none'>Login</Link>
            <Link to="/signup" className='ms-5 text-white text-decoration-none'>Signup</Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
















export default Header;