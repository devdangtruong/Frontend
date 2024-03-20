import React, { useState } from "react";
import deleteIcon from "../../Images/Logo/cross-mark_274c.png";
function InformationProduct(props) {
  const [numberProduct, setNumberProduct] = useState(1);

  const increaseProduct = () => {
    const increase = numberProduct + 1;
    setNumberProduct(increase);
  };
  const decreaseProduct = () => {
    const decrease = numberProduct - 1;
    setNumberProduct(decrease);
  };

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
          <img src={info.image} alt="" />
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
                onClick={increaseProduct}
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
              <span>{numberProduct}</span>
              <button
                onClick={decreaseProduct}
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
              Đặt ngay
            </button>
          </div>
        </div>
      ))}
      <img
        src={deleteIcon}
        onClick={props.pageToHome}
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
}

export default InformationProduct;
