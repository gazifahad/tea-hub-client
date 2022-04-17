import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  }

  return (
    <nav className="sticky-top">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container className="container">
          <Navbar.Brand as={Link} to="/">
            RAJU TEA STALL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>              
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? <Nav.Link onClick={logOut}>
                Sign Out
              </Nav.Link>
              : <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
