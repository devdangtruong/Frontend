import React, { useState } from "react";
import product1 from "../../../Images/SamsungImages/1-14.webp";
import product2 from "../../../Images/SamsungImages/ava-Zfold5-bluepng-3.webp";
import product3 from "../../../Images/SamsungImages/ava-Zfold5-cream.webp";
import product4 from "../../../Images/SamsungImages/ava-a34-green.webp";
import product5 from "../../../Images/SamsungImages/ava-s20fe-mint.webp";
import product6 from "../../../Images/SamsungImages/ava-s22ultra-scream.webp";
import product7 from "../../../Images/SamsungImages/ava-s23-black.webp";
import product8 from "../../../Images/SamsungImages/ava-s23-purple.webp";
import product9 from "../../../Images/SamsungImages/ava-zflip5-Purrple.webp";
import product10 from "../../../Images/SamsungImages/ava-zflip5-mint.webp";
import product11 from "../../../Images/SamsungImages/avt-samsung-a23-xanh.webp";
import product12 from "../../../Images/SamsungImages/s21fe-trang.webp";
import product13 from "../../../Images/SamsungImages/samsung-galaxy-s24-plus_197557.webp";
import product14 from "../../../Images/SamsungImages/samsung-galaxy-s24-ultra_197559.webp";
import product15 from "../../../Images/SamsungImages/samsung-galaxy-s24_197555.webp";

function Container3() {
  const listProducts = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
  ];
  return (
    <div>
      <span className="title-list">SAMSUNG</span>
      <div className="container">
        {listProducts.map((product) => (
          <div className="product-information">
            <img src={product} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>Samsung</span>
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

export default Container3;
