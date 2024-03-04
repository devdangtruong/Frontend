import React from "react";
import logo from "../../Images/Logo/buycellphone-high-resolution-logo-transparent.webp";
import "./style.css";
import { BsFillTelephoneInboundFill, BsBagCheckFill } from "react-icons/bs";
import {
  MdOutlineLocationOn,
  MdOutlineSecurity,
  MdOutlineSearch,
} from "react-icons/md";

function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="logo" style={{ width: "200px" }} />
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Bạn cần tìm gì?"
        />
        <MdOutlineSearch />
      </div>

      <button
        style={{
          backgroundColor: "pink",
          padding: "5px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        <MdOutlineLocationOn />
        Xem giá tại đây
      </button>
      <button className="btn-head">
        <BsFillTelephoneInboundFill />
        Gọi mua hàng
      </button>
      <button className="btn-head">
        <BsBagCheckFill />
        Chi tiết giỏ hàng
      </button>
      <button className="btn-head">
        <MdOutlineSecurity />
        Chính sách bảo hành
      </button>
      <button className="btn-head">
        <MdOutlineLocationOn />
        Hệ thống cửa hàng
      </button>
      <button className="btn-sign" onClick={props.pageToLogin}>
        Đăng nhập
      </button>
      <button className="btn-sign">Đăng ký</button>
    </div>
  );
}

export default Header;
