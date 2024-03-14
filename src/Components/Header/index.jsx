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
  const [search, setSearch] = useState(props.product);
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
      head: "Chi tiết giỏ hàng",
      icon: <BsBagCheckFill />,
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
      product.lists.some((v) =>
        v.titles.toLowerCase().includes(searchName.toLocaleLowerCase())
      )
    );
    props.setListItem(test);
  };

  return (
    <div className="header">
      <img src={logo} alt="logo" style={{ width: "200px" }} />
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Bạn cần tìm gì?"
          onChange={searchProducts}
        />
        <MdOutlineSearch onClick={searchItems} />
      </div>
      {header.map((head, i) => (
        <button
          key={i}
          style={{
            backgroundColor: "pink",
            padding: "5px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          {head.head}
          {head.icon}
        </button>
      ))}
      {sign.map((i, index) => (
        <button className="btn-sign" onClick={i.method} key={index}>
          {i.name}
        </button>
      ))}
    </div>
  );
}

export default Header;
