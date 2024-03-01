import React, { useState } from "react";
import product1 from "../../../Images/AppleWatch/avt-apple-watch-s9-day-vai-xanh.webp";
import product2 from "../../../Images/AppleWatch/avt-apple-watch-se-day-vai-trang.webp";
import product3 from "../../../Images/AppleWatch/avt-apple-watch-series-9-hong.webp";
import product4 from "../../../Images/AppleWatch/avt-apple-watch-series-se-2023-trang.webp";
import product5 from "../../../Images/AppleWatch/avt-apple-watch-ultra-2-1.webp";
import product6 from "../../../Images/AppleWatch/avt-apple-watch-ultra-2-2.webp";
import product7 from "../../../Images/AppleWatch/avt-apple-watch-ultra-2.webp";
function Container7() {
  const listProducts = [product1, product2, product3, product4, product5];
  return (
    <div>
      <span className="title-list">APPLE WATCH</span>
      <div className="container">
        {listProducts.map((product) => (
          <div className="product-information">
            <img src={product} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>APPLE WATCH</span>
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

export default Container7;
