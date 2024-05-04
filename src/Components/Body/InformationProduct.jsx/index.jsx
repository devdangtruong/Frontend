import React, { useState } from "react";
import deleteIcon from "../../../Images/Logo/cross-mark_274c.png";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../feature/counter/counterSlice";
function InformationProduct(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log(props.listItem.map((item) => parseFloat(item.price, 10)));

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {props.searchInformation.map((info) => (
        <div
          key={info._id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img src={info.image} alt="imageproduct" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>{info.name}</h1>
            <p>{info.information}</p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                style={{
                  borderRadius: "10px",
                  background: "none",
                  backgroundColor: "orange",
                  border: "none",
                  boxShadow: "1px 1px 1px gray",
                  margin: "10px",
                }}
              >
                -
              </button>
              <span>{count}</span>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                style={{
                  borderRadius: "10px",
                  background: "none",
                  backgroundColor: "orange",
                  border: "none",
                  boxShadow: "1px 1px 1px gray",
                  margin: "10px",
                }}
              >
                +
              </button>
            </div>
            <span>{info.price}</span>
            <button
              style={{
                borderRadius: "10px",
                background: "none",
                backgroundColor: "orange",
                border: "none",
                boxShadow: "1px 1px 1px gray",
                padding: "5px",
                margin: "10px",
              }}
            >
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      ))}
      <img
        src={deleteIcon}
        onClick={props.pageToHome}
        style={{ width: "50px", height: "50px" }}
        alt="iconexit"
      />
    </div>
  );
}

export default InformationProduct;
