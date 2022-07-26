import React,{useContext} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext from '../store/auth-context'


function NavBar() {

   var login = 'Login';
  const authCtx = useContext(AuthContext);

  const Logout = () => {
    authCtx.logout()
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link className="justify-content-end" href={"/" + login}>{login}</Nav.Link>

            <Nav.Link className="justify-content-end" href="/admin">Admin Dashboard</Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar