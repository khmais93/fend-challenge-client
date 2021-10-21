import { useState, useCallback } from "react";
import "./App.css";
import LoginMessage from "./components/LoginMessage";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const loginHandler = useCallback((val) => {
    setLoggedIn(val);
  }, []);
  // console.log("APP.JS", loggedIn);
  return (
    <>
      <NavBar loginHandler={loginHandler} />
      {loggedIn ? <Home /> : <LoginMessage />}
    </>
  );
}

export default App;
