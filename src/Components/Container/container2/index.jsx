import React from "react";
import "../style.css";
function Container2(props) {
  console.log(props);
  return (
    <div>
      <span className="title-list">{props.product.title}</span>
      <div className="container">
        {props.product.lists.map((product) => (
          <div className="product-information">
            <img src={product.images} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>{product.titles}</span>
            <span> {product.prices}đ</span>
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
