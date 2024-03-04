import React from "react";
import product1 from "../../../Images/Inoi/inoi-288s_197564.webp";
import product2 from "../../../Images/Inoi/inoi-a72_197567.webp";
import product3 from "../../../Images/Inoi/inoi-a83_197563.webp";
import product4 from "../../../Images/Inoi/inoi-note-13s_197562.webp";

function Container5() {
  const listProducts = [product1, product2, product3, product4, product1];
  return (
    <div>
      <span className="title-list">INOI</span>
      <div className="container">
        {listProducts.map((product) => (
          <div className="product-information">
            <img src={product} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>INOI</span>
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

export default Container5;
