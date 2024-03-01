import React, { useState } from "react";
import product1 from "../../../Images/IpadImages/1-16.webp";
import product2 from "../../../Images/IpadImages/1234.webp";
import product3 from "../../../Images/IpadImages/2-18.webp";
import product4 from "../../../Images/IpadImages/3-13.webp";
import product5 from "../../../Images/IpadImages/4-10.webp";
import product6 from "../../../Images/IpadImages/pad-gen-9-xam.webp";
import product7 from "../../../Images/IpadImages/ipad-2.webp";
import product8 from "../../../Images/IpadImages/pad-gen-9.webp";

function Container4() {
  const listProducts = [
    product6,
    product8,
    product1,
    product2,
    product2,
    product3,
    product4,
    product5,
    product7,
    product7,
  ];
  return (
    <div>
      <span className="title-list">APPLE IPAD</span>
      <div className="container">
        {listProducts.map((product) => (
          <div className="product-information">
            <img src={product} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>Apple Ipad</span>
            <span>20.000.000 đ</span>
            <p>
              [Từ 11-29.2] Lì xì trao tay nhận vạn điều may - nhận ngay lì xì
              200.000đ
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container4;
