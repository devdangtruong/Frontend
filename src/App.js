import "./App.css";
import Signin from "./Auth/SignIn";
import Home from "./Home";
import { useState } from "react";
import SignUp from "./Auth/SignUp";

function App() {
  const [pages, setPages] = useState("home");

  const pageToSignin = () => {
    setPages("signin");
  };

  const pageToSignUp = () => {
    setPages("signup");
  };
  return (
    <div className="App">
      {pages === "signin" ? (
        <Signin />
      ) : pages === "signup" ? (
        <SignUp />
      ) : (
        <Home toSignIn={pageToSignin} toSignUp={pageToSignUp} />
      )}
    </div>
  );
}

export default App;
