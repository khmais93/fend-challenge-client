import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GoogleLogout, GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";

function NavBar(props) {
  const { loginHandler, loggedIn } = props;

  const onLoginSuccess = (res) => {
    loginHandler(true);
    refreshTokenSetup(res);
  };

  const onLoginFailure = (res) => {
    loginHandler(false);
  };
  const onLogoutSuccess = () => {
    loginHandler(false);
  };
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
              {!loggedIn ? (
                <GoogleLogin
                  clientId="422495471088-4i1rh4ae2a9dkcnrrfe0b5ustq3nj4ni.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
              ) : (
                <GoogleLogout
                  clientId="422495471088-4i1rh4ae2a9dkcnrrfe0b5ustq3nj4ni.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={onLogoutSuccess}
                ></GoogleLogout>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
