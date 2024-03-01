import React, { useState } from "react";
import product1 from "../../../Images/OtherImage/655817-Product-1-I-638257635005562044.webp";
import product2 from "../../../Images/OtherImage/SDP-Samssung.webp";
import product3 from "../../../Images/OtherImage/Untitled-1.webp";
import product4 from "../../../Images/OtherImage/ava-a54oops.webp";
import product5 from "../../../Images/OtherImage/ava-danmanhinhfold5.webp";
import product6 from "../../../Images/OtherImage/ava-opa14-kemthe.webp";
import product7 from "../../../Images/OtherImage/ava-oplungflip5-1.webp";
import product8 from "../../../Images/OtherImage/ava-oplungflip5-2.webp";
import product9 from "../../../Images/OtherImage/ava-oplungfold5-1.webp";
import product10 from "../../../Images/OtherImage/but-spen.webp";
import product11 from "../../../Images/OtherImage/ice-crystal-pd-xy-c14-1_4047.webp";
import product12 from "../../../Images/OtherImage/pin-sac-du-phong-aukey-pb-n83s-20w-pd-10000mah_197501.webp";
import product13 from "../../../Images/OtherImage/pisen.webp";
import product14 from "../../../Images/OtherImage/sac_2_cong_anker_323_33w.webp";
import product15 from "../../../Images/OtherImage/tab-a8.webp";
function Container8() {
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
      <span className="title-list">PHỤ KIỆN</span>
      <div className="container">
        {listProducts.map((product) => (
          <div className="product-information">
            <img src={product} alt="" style={{ width: "150px" }} />
            <span style={{ fontWeight: "bold" }}>PHỤ KIỆN</span>
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

export default Container8;
