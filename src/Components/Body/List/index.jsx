import React from "react";

function List({ listItem, pageToInformationProduct }) {
  return (
    <div className="container">
      {listItem.map((product) => (
        <button
          className="product-information"
          key={product._id}
          style={{ border: "none" }}
          // onClick={pageToInformationProduct(product._id)}
        >
          <img src={product.image} alt="" style={{ width: "150px" }} />
          <span style={{ fontWeight: "bold" }}>{product.name}</span>
          <span> {product.price}đ</span>
          <p>{product.information}</p>
        </button>
      ))}
    </div>
  );
}

export default List;
