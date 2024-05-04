import React from "react";
import Header from "../Components/Header";
import Advertiser from "../Components/Body/Advertise";
import Accessory from "../Components/Body/Accessory";
import Footer from "../Components/Footer";
import "../Components/Body/style.css";
import List from "../Components/Body/List";
function Home(props) {
  return (
    <div>
      <Header
        pageToSignIn={props.toSignIn}
        pageToSignUp={props.toSignUp}
        listItem={props.listItem}
        setListItem={props.setListItem}
        pageToCart={props.pageToCart}
      />
      <Advertiser />
      <List
        listItem={props.listItem}
        pageToInformationProduct={props.pageToInformationProduct}
      />
      <Accessory />
      <Footer />
    </div>
  );
}

export default Home;
