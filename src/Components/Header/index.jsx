import React, { useState } from "react";
import logo from "../../Images/Logo/buycellphone-high-resolution-logo-transparent.webp";
import "./style.css";
import { BsFillTelephoneInboundFill, BsBagCheckFill } from "react-icons/bs";
import {
  MdOutlineLocationOn,
  MdOutlineSecurity,
  MdOutlineSearch,
} from "react-icons/md";

function Header(props) {
  const [search, setSearch] = useState(props.listItem);
  const [searchName, setSearchName] = useState("");
  const searchProducts = (e) => {
    setSearchName(e.target.value);
  };
  const header = [
    {
      head: "Xem giá tại đây",
      icon: <MdOutlineLocationOn />,
    },
    {
      head: "Gọi mua hàng",
      icon: <BsFillTelephoneInboundFill />,
    },

    {
      head: "Chính sách bảo hành",
      icon: <MdOutlineSecurity />,
    },
    {
      head: "Hệ thống cửa hàng",
      icon: <MdOutlineLocationOn />,
    },
  ];
  const sign = [
    { name: "Đăng nhập", method: props.pageToSignIn },
    { name: "Đăng ký", method: props.pageToSignUp },
  ];

  const searchItems = () => {
    const test = search.filter((product) =>
      product.name
        .toLowerCase()
        .toString()
        .includes(searchName.toLowerCase().toString())
    );
    props.setListItem(test);
  };

  return (
    <div className="header">
      <img src={logo} alt="logo" style={{ width: "200px" }} />
      <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
        <input
          type="text"
          className="search-input"
          placeholder="Bạn cần tìm gì?"
          onChange={searchProducts}
        />
        <MdOutlineSearch onClick={searchItems} />
      </div>
      {header.map((head, i) => (
        <button key={i} className="btn-list">
          {head.head}
          {head.icon}
        </button>
      ))}
      <button onClick={props.pageToCart} className="btn-list">
        Chi tiết giỏ hàng
        <BsBagCheckFill />
      </button>
      {sign.map((i, index) => (
        <button className="btn-sign" onClick={i.method} key={index}>
          {i.name}
        </button>
      ))}
    </div>
  );
}

export default Header;
