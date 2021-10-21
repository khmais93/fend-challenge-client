import React, { useEffect, useRef, useState } from "react";

function GoogleAuth(props) {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef("");
  const { loginHandler } = props;

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "422495471088-4i1rh4ae2a9dkcnrrfe0b5ustq3nj4ni.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  useEffect(() => {
    loginHandler(isSignedIn);
  }, [isSignedIn, loginHandler]);

  const onAuthChange = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };
  const onSignIn = () => {
    auth.current.signIn();
  };

  const onSignOut = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
}

export default GoogleAuth;
