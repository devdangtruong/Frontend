import React, { useState } from "react";
import "../style.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
function SignUp() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  const showPassword = (e) => {
    setPassword(e.target.value);
  };
  const hidePassword = () => {
    setShow(!show);
  };
  const titles = ["Họ và tên", "Email", "Tên tài khoản"];
  const passTitles = ["Mật khẩu", "Nhập lại mật khẩu"];
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
        <h1>ĐĂNG KÝ</h1>
        {titles.map((title) => (
          <div className="login-child">
            <span className="login-text">{title}</span>
            <input type="text" className="input-login" />
          </div>
        ))}
        {passTitles.map((pt) => (
          <div className="login-child">
            <span className="login-text">{pt}</span>
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
        ))}

        <button className="btn-sign">ĐĂNG KÝ</button>
      </div>
    </div>
  );
}

export default SignUp;
