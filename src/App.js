import "./App.css";
import Signin from "./Auth/SignIn";
import Home from "./Home";
import { useEffect, useState } from "react";
import SignUp from "./Auth/SignUp";
import InformationProduct from "./Components/InformationProduct.jsx";
import axios from "axios";

function App() {
  const [pages, setPages] = useState("home");
  const [listItem, setListItem] = useState([]);
  const [identify, setIdentify] = useState();

  const pageToSignin = () => {
    setPages("signin");
  };

  const pageToSignUp = () => {
    setPages("signup");
  };
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_PRODUCT)
      .then((res) => {
        console.log(res);
        setListItem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchInformation = listItem.filter((item) => item._id === identify);
  const pageToInformationProduct = (_id) => {
    setPages("informationProduct");
    setIdentify(_id);
  };

  return (
    <div className="App">
      {pages === "signin" ? (
        <Signin toHome={setPages} />
      ) : pages === "signup" ? (
        <SignUp toHome={setPages} />
      ) : pages === "informationProduct" ? (
        <InformationProduct
          searchInformation={searchInformation}
          pageToHome={setPages}
        />
      ) : (
        <Home
          toSignIn={pageToSignin}
          toSignUp={pageToSignUp}
          listItem={listItem}
          setListItem={setListItem}
          pageToInformationProduct={pageToInformationProduct}
        />
      )}
    </div>
  );
}

export default App;
