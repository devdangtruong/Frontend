import React, { useState } from "react";
import "../style.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
function Signin() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  const showPassword = (e) => {
    setPassword(e.target.value);
  };
  const hidePassword = () => {
    setShow(!show);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50em",
      }}
    >
      <div className="login">
        <div className="login-child">
          <span className="login-text">Tài khoản</span>
          <input type="text" className="input-login" />
        </div>
        <div className="login-child">
          <span className="login-text">Mật khẩu</span>
          {show ? (
            <div>
              <input
                type="text"
                className="input-login"
                onChange={showPassword}
              />
              <IoMdEye onClick={hidePassword} />
            </div>
          ) : (
            <div>
              <input
                type="password"
                className="input-login"
                onChange={showPassword}
              />
              <IoMdEyeOff onClick={hidePassword} />
            </div>
          )}
        </div>

        <button className="btn-sign">ĐĂNG NHẬP</button>
      </div>
    </div>
  );
}

export default Signin;
