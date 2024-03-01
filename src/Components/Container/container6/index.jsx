import React, { useState } from "react";
import product1 from "../../../Images/AndroidTab/1323213.webp";
import product2 from "../../../Images/AndroidTab/ava-s9fe-mint.webp";
import product3 from "../../../Images/AndroidTab/ava-s9fe-silver-1.webp";
import product4 from "../../../Images/AndroidTab/ava-tabs9-black-1.webp";
import product5 from "../../../Images/AndroidTab/ava-tabs9-black.webp";
import product7 from "../../../Images/AndroidTab/ava-tabs9ultra-cream.webp";
import product9 from "../../../Images/AndroidTab/avt-samsung-s8-trang.webp";
import product10 from "../../../Images/AndroidTab/avt-tab-s6-lite-xanh-2.webp";
import product11 from "../../../Images/AndroidTab/clickbuy1.webp";
import product12 from "../../../Images/AndroidTab/samssung-galaxy-tab-a9_197484.webp";

function Container6() {
  const listProducts = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product7,
    product9,
    product10,
    product11,
    product12,
  ];
  return (
    <div>
      <span className="title-list">MÁY TÍNH BẢNG ANDROID</span>
      <div className="container">
        {listProducts.map((product) => (
          <div className="product-information">
            <img src={product} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>MÁY TÍNH BẢNG ANDROID</span>
            <span>20.000.000 đ</span>
            <p>
              [từ 11-29.2] Lì xì trao tay nhận vạn điều may - nhận ngay lì xì
              200.000đ
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container6;
