import React, { useContext } from 'react'
import { MyContext } from './../../context/MyContext'
import { Link} from 'react-router-dom';
import logo from './../../userlogo.png';
import { 
  Navbar, 
  Nav, 
  Container, 
  Button
} from 'react-bootstrap';
//todo: logout + reload picks up last user. fix

function Header() {
  const {rootState, toggleNav, logoutUser} = useContext(MyContext);
  const {isAuth, theUser} = rootState;

  // If user Logged in, logoutbutton in header
  return isAuth ? (
    <div>
      <Navbar bg='light'>
        <Container> 
          <Navbar.Brand href='/'>
            Holybe forum
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Topics</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ paddingRight: 10 }}>
              <Link to='/profile'><span>{theUser.username}</span></Link>
            </Navbar.Text>
            <Button variant='light' onClick={logoutUser}>
              Log uit
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  ) : 
  (
    <div>
      <Navbar bg='light'>
        <Container>                    
          <Navbar.Brand href='/'>Holybe forum</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={toggleNav}>Login / Sign up</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;