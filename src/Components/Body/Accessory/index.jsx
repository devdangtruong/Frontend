import React from "react";
import { accessory } from "../../Products";
function Accessory() {
  return (
    <div>
      <span className="title-list">DANH MỤC HÀNG CŨ</span>
      <div style={{ display: "flex" }}>
        {accessory.map((product, index) => (
          <div className="product-information" key={index}>
            <img src={product.image} alt="" style={{ width: "100px" }} />
            <span style={{ fontWeight: "bold" }}>{product.name}</span>
            <span>{product.price} đ</span>
          </div>
        ))}
      </div>
      <div style={{ margin: "10px", padding: "10px 0px" }}>
        <span
          style={{
            boxShadow: "1px 1px 1px 1px #dad3d3",
            fontWeight: "bold",
            fontSize: "20px",
            borderRadius: "5px",
            padding: "15px 50px",
          }}
        >
          WEBSITE BÁN HÀNG CÔNG NGHỆ UY TÍN TẠI VIỆT NAM
        </span>
      </div>
    </div>
  );
}

export default Accessory;
