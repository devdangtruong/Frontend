import React from "react";
import "../style.css";
import product1 from "../../../Images/IphoneImages/4.webp";
import product2 from "../../../Images/IphoneImages/thumb_IP12Pro_3.webp";
import product3 from "../../../Images/IphoneImages/thumb_11-ProMAX_2.webp";
import product4 from "../../../Images/IphoneImages/samsung-galaxy-s24-ultra_197559.webp";
import product5 from "../../../Images/IphoneImages/iphone-15-pro-max-titan-1.webp";
import product6 from "../../../Images/IphoneImages/avt-iphone-13-pro-max-gold.webp";
import product7 from "../../../Images/IphoneImages/iphone-11-tim.webp";
import product8 from "../../../Images/IphoneImages/iphone-15-hong-dai-dien.webp";
import product9 from "../../../Images/IphoneImages/ava-spark10-white.webp";
import product10 from "../../../Images/IphoneImages/tecno-spark-2024_197544.webp";
import product11 from "../../../Images/IphoneImages/iphone-12-tim.webp";
import product12 from "../../../Images/IphoneImages/avt-iphone-14-pro-max-deep-purple.webp";
import product13 from "../../../Images/IphoneImages/samsung-galaxy-s24_197555.webp";
import product14 from "../../../Images/IphoneImages/samsung-galaxy-s24-plus_197557.webp";
import product15 from "../../../Images/IphoneImages/avt-xiaomi-redmi-note-13-pro-768x768.webp";

function Container2() {
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
      <span className="title-list">IPHONE</span>
      <div className="container">
        {listProducts.map((product) => (
          <div className="product-information">
            <img src={product} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>Iphone</span>
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

export default Container2;
