import React, { useState } from "react";
import Header from "../Components/Header";
import Container1 from "../Components/Container/container1";
import Container2 from "../Components/Container/container2";
import Container3 from "../Components/Container/container3";
import Container4 from "../Components/Container/container4";
import Footer from "../Components/Footer";
import { products } from "../Components/Products";
function Home(props) {
  const [listItem, setListItem] = useState([...products]);
  return (
    <div>
      <Header
        pageToSignIn={props.toSignIn}
        pageToSignUp={props.toSignUp}
        product={products}
        setListItem={setListItem}
      />
      <Container1 />
      {listItem.map((product) => (
        <Container2 product={product} />
      ))}
      <Container3 />
      <Container4 />
      <Footer />
    </div>
  );
}

export default Home;
