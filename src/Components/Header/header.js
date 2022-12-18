import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

import './header.css'
import { useNavigate } from 'react-router-dom';



const Header=()=>{

  const [login,setLogin]=useState(false);

  const Navigate=useNavigate();
useEffect(()=>{
  if(localStorage.getItem('token')){
    setLogin(true);
  }
  else{
    Navigate("/login")
  }
},[localStorage.getItem('token')])

const logoutHandler=(e)=>{
  e.preventDefault();
  localStorage.clear();
  setLogin(false);
  Navigate("/login");
}

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

            {login?<><div className='d-flex justify-content-center row' ><p className='text-white d-flex col-4 mb-0 me-4'><span className='material-icons text-white'>account_circle</span>{localStorage.getItem('email').slice(0,12)}...</p><Link to="/" className='ms-5 mx-0 col-2 text-white text-decoration-none' onClick={logoutHandler}>Logout</Link></div></>:
            <>
            <Link to="/login" className='ms-5 text-white text-decoration-none'>Login</Link>
            <Link to="/signup" className='ms-5 text-white text-decoration-none'>Signup</Link>
          </>}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
















export default Header;