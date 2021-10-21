import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import GoogleAuth from "./GoogleAuth";

function NavBar(props) {
  const { loginHandler } = props;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>FEND CHALLENGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link>
              <GoogleAuth loginHandler={loginHandler} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
