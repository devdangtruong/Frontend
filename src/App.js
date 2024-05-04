import "./App.css";
import Signin from "./Auth/SignIn";
import Home from "./Home";
import { useEffect, useState } from "react";
import SignUp from "./Auth/SignUp";
import InformationProduct from "./Components/Body/InformationProduct.jsx/index.jsx";
import axios from "axios";
import Cart from "./Components/Body/Cart/index.jsx";

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
        setListItem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchInformation = listItem.filter((item) => item._id === identify);
  const pageToInformationProduct = (_id) => {
    setPages("informationProduct");
    setIdentify(_id);
  };
  const pageToHome = () => {
    setPages("home");
  };

  const pageToCart = () => {
    setPages("cart");
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
          pageToHome={pageToHome}
          listItem={listItem}
        />
      ) : pages === "cart" ? (
        <Cart
          pageToHome={pageToHome}
          listItem={listItem}
          setListItem={setListItem}
        />
      ) : (
        <Home
          toSignIn={pageToSignin}
          toSignUp={pageToSignUp}
          listItem={listItem}
          setListItem={setListItem}
          pageToInformationProduct={pageToInformationProduct}
          pageToCart={pageToCart}
        />
      )}
    </div>
  );
}

export default App;
