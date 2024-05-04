import React, { useState } from "react";
import deleteIcon from "../../../Images/Logo/cross-mark_274c.png";
import icon from "../../../Images/Logo/buycell-high-resolution-logo-black-transparent.webp";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../feature/counter/counterSlice";
function Cart(props) {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={icon} alt="logo" style={{ width: "100px" }} />
        <h1>GIỎ HÀNG CỦA TÔI</h1>
        <img
          src={deleteIcon}
          onClick={props.pageToHome}
          style={{ width: "50px", height: "50px" }}
          alt="iconexit"
        />
      </div>
      <div>
        {props.listItem.map((item, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
