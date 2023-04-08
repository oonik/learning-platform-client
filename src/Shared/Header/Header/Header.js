import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from '../../../images/download.png'
import { Link } from 'react-router-dom';
import LeftSideNav from '../../LeftSideNav/LeftSideNav/LeftSideNav';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogout =()=>{
     logOut()
     .then(()=>{

     })
     .catch((error)=>console.error(error))
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Web Technology</Navbar.Brand>
           <Image
            style={{height: '40px'}}
            src={logo}
           ></Image>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Course</Link></Nav.Link>
              <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {
                  user?.uid ?
                  <>
                   <span>{user?.displayName}</span>
                   <button onClick={handleLogout} variant="light" className='rounded'>Log out</button>
                  </>
                  :
                  <>
                   <Link className='me-2' to='/login'>Login</Link>
                   <Link to='/register'>Register</Link>
                  </>
                }
                
                </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {
                  user ? 
                  <Image style={{height: '40px'}} roundedCircle src={user.photoURL}></Image>
                  : <FaUser></FaUser>
                }
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;