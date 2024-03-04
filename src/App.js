import "./App.css";
import Signin from "./SignIn";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [pages, setPages] = useState("home");

  const pageToLogin = () => {
    setPages("login");
  };
  return (
    <div className="App">
      {pages === "login" ? <Signin /> : <Home toLogin={pageToLogin} />}
    </div>
  );
}

export default App;
