import React, { useState } from "react";
import "../style.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
function Signin(props) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [account, setAccount] = useState("");
  const showPassword = (e) => {
    setPassword(e.target.value);
  };

  const hidePassword = () => {
    setShow(!show);
  };

  const getAccount = (e) => {
    setAccount(e.target.value);
  };

  const sendForm = () => {
    if (!password || !account) {
      setValidate("Vui lòng điền tài khoản hoặc mật khẩu");
    } else {
      setValidate("");
      props.toHome("home");
    }
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
          <input
            type="text"
            className="input-login"
            value={account}
            onChange={getAccount}
          />
        </div>
        <div className="login-child">
          <span className="login-text">Mật khẩu</span>
          {show ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <div>
                <input
                  type="text"
                  className="input-login"
                  onChange={showPassword}
                  value={password}
                />
                <IoMdEye onClick={hidePassword} />
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <div>
                <input
                  type="password"
                  className="input-login"
                  onChange={showPassword}
                />
                <IoMdEyeOff onClick={hidePassword} />
              </div>
            </div>
          )}
        </div>

        {validate ? <div className="validate">{validate}</div> : null}

        <button className="btn-sign" onClick={sendForm}>
          ĐĂNG NHẬP
        </button>
      </div>
    </div>
  );
}

export default Signin;
