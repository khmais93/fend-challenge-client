import { useState } from "react";
import "./App.css";
import LoginMessage from "./components/LoginMessage";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [loggedOut, setLoggedOut] = useState(true);
  return (
    <>
      <NavBar loginHandler={setLoggedOut} />
      {!loggedOut ? <Home /> : <LoginMessage />}
    </>
  );
}

export default App;
