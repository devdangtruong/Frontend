import React from "react";
import product1 from "../../../Images/OldOther/cap-sac.webp";
import product2 from "../../../Images/OldOther/dan-man-hinh.webp";
import product3 from "../../../Images/OldOther/laptop.webp";
import product4 from "../../../Images/OldOther/loa.webp";
import product5 from "../../../Images/OldOther/op-lung.webp";
import product6 from "../../../Images/OldOther/phu-kien-apple.webp";
import product7 from "../../../Images/OldOther/pin-du-phong.webp";
import product8 from "../../../Images/OldOther/tai-nghe.webp";
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
  ];
  return (
    <div>
      <span className="title-list">DANH MỤC HÀNG CŨ</span>
      <div style={{ display: "flex" }}>
        {listProducts.map((product, index) => (
          <div className="product-information" key={index}>
            <img src={product} alt="" style={{ width: "100px" }} />
            <span style={{ fontWeight: "bold" }}>HÀNG CŨ</span>
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

export default Container3;
