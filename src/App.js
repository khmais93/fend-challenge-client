import { useState } from "react";
import "./App.css";
import LoginMessage from "./components/LoginMessage";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  console.log("APP.JS", loggedIn);
  return (
    <>
      <NavBar loginHandler={setLoggedIn} />
      {loggedIn ? <Home /> : <LoginMessage />}
    </>
  );
}

export default App;
