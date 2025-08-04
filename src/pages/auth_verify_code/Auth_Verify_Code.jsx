import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import auth_samsung from "../../assets/auth_samsung.png"
import auth_visma from "../../assets/auth_visma.png"
import auth_bolt from "../../assets/auth_bolt.png"
import auth_aws from "../../assets/auth_aws.png"
import auth_accenture from "../../assets/auth_accenture.png"
import auth_att from "../../assets/auth_att.png"
import auth_logo from "../../assets/auth_logo.png"
import auth_setting from "../../assets/auth_setting.png"
import { FaArrowLeft } from "react-icons/fa6";
import "./Auth_Verify_Code.css";
import Loading from "../../components/loading/Loading";

const Auth_Verify_Code = () => {
  const inputs = useRef([]);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputs.current[index - 1].focus();
    }
  };

  const complete = code.every(char => char !== "");

  const handleVerify = () => {
    if (complete) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/analytics");
      }, 2000);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className='auth_verify'>

        <div className="auth_verify_left">
          <div className="auth_verify_left_text">
            <h2 className="auth_verify_left_title">Welcome to Devias Kit PRO</h2>
            <p className="auth_verify_left_paragraph">
              A professional kit that comes with ready-to-use MUI components developed with one common goal in
              mind, help you build faster & beautiful applications.
            </p>
            <b className="auth_verify_left_bold">Join 6,000+ forward-thinking companies:</b>
          </div>
          <div className="auth_verify_left_icons">
            <img src={auth_samsung} alt="" />
            <img src={auth_visma} alt="" />
            <img src={auth_bolt} alt="" />
            <img src={auth_aws} alt="" />
            <img src={auth_accenture} alt="" />
            <img src={auth_att} alt="" />
          </div>
        </div>

        <div className="auth_verify_right">
          <div className="auth_verify_right_logo">
            <img src={auth_logo} alt="" className='auth_login_in_right_logo_img' />
            <p className='auth_verify_right_logo_p'>Devias Kit <span id='login_in_pro'>PRO</span></p>
          </div>

          <div className="auth_verify_right_dash">
            <FaArrowLeft className='auth_verify_right_dash_icon' />
            <p className='auth_verify_right_dash_p'>Dashboard</p>
          </div>

          <h3 className="auth_verify_right_heading">Verify code</h3>

          <div className="code-container">
            {code.map((value, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="code-input"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputs.current[index] = el)}
              />
            ))}
          </div>

          <div className="auth_verify_right_input">
            <button
              className='auth_verify_right_input_btn'
              onClick={handleVerify}
              disabled={!complete || loading}
            >
              Verify
            </button>
            <img src={auth_setting} alt="" className='auth_verify_right_setting' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth_Verify_Code;
