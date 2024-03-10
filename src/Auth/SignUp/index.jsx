import React, { useState } from "react";
import "../style.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
function SignUp(props) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const passTitles = ["Mật khẩu", "Nhập lại mật khẩu"];
  const [validate, setValidate] = useState("");
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");

  const data = {
    name: fullname,
    email: email,
    password: password,
    account: account,
  };

  const showPassword = (e) => {
    setPassword(e.target.value);
  };

  const getAccount = (e) => {
    setAccount(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getName = (e) => {
    setFullName(e.target.value);
  };
  const hidePassword = () => {
    setShow(!show);
  };

  const sendForm = () => {
    if (!password || !email || !fullname || !account) {
      setValidate("Bạn chưa điền đầy đủ thông tin và ít nhất có 10 kí tự");
    } else if (!email.includes("@")) {
      setValidate("Vui lòng nhập đúng email");
    } else {
      setValidate("");
      props.toHome("home");
    }
    axios.post(process.env.REACT_APP_BACKEND_USER, data);
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
        <h1>ĐĂNG KÝ</h1>

        <div className="login-child">
          <span className="login-text">Họ và tên</span>
          <input
            type="text"
            className="input-login"
            value={fullname}
            onChange={getName}
          />
        </div>
        <div className="login-child">
          <span className="login-text">Email</span>
          <input
            type="text"
            className="input-login"
            value={email}
            onChange={getEmail}
          />
        </div>
        <div className="login-child">
          <span className="login-text">Tên tài khoản</span>
          <input
            type="text"
            className="input-login"
            value={account}
            onChange={getAccount}
          />
        </div>

        {passTitles.map((pt) => (
          <div className="login-child">
            <span className="login-text">{pt}</span>
            {show ? (
              <div>
                <input
                  type="text"
                  className="input-login"
                  value={password}
                  onChange={showPassword}
                />
                <IoMdEye onClick={hidePassword} />
              </div>
            ) : (
              <div>
                <input
                  type="password"
                  className="input-login"
                  value={password}
                  onChange={showPassword}
                />
                <IoMdEyeOff onClick={hidePassword} />
              </div>
            )}
          </div>
        ))}
        {validate ? <div className="validate">{validate}</div> : null}
        <button className="btn-sign" onClick={sendForm}>
          ĐĂNG KÝ
        </button>
      </div>
    </div>
  );
}

export default SignUp;
