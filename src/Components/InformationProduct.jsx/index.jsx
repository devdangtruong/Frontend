import React from "react";
import { TiDelete } from "react-icons/ti";
function InformationProduct(props) {
  return (
    <div>
      <TiDelete onClick={props.pageToHome("home")} />
      Hello
    </div>
  );
}

export default InformationProduct;
