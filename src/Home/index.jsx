import React from "react";
import Header from "../Components/Header";
import Container1 from "../Components/Container/container1";
import Container2 from "../Components/Container/container2";
import Container3 from "../Components/Container/container3";
import Container4 from "../Components/Container/container4";
import Container5 from "../Components/Container/container5";
import Container6 from "../Components/Container/container6";
import Container7 from "../Components/Container/container7";
import Container8 from "../Components/Container/container8";
import Container9 from "../Components/Container/container9";
import Container10 from "../Components/Container/container10";
import Footer from "../Components/Footer";

function Home(props) {
  return (
    <div>
      <Header pageToSignIn={props.toSignIn} pageToSignUp={props.toSignUp} />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Footer />
    </div>
  );
}

export default Home;
