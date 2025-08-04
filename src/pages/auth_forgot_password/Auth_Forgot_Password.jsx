import React, { useState } from 'react';
import "./Auth_Forgot_password.css";
import auth_samsung from "../../assets/auth_samsung.png";
import auth_visma from "../../assets/auth_visma.png";
import auth_bolt from "../../assets/auth_bolt.png";
import auth_aws from "../../assets/auth_aws.png";
import auth_accenture from "../../assets/auth_accenture.png";
import auth_att from "../../assets/auth_att.png";
import auth_logo from "../../assets/auth_logo.png";
import auth_setting from "../../assets/auth_setting.png";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Loading from "../../components/loading/Loading"; 

const Auth_Forgot_Password = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendReset = () => {
    if (email.trim() !== '') {
      setLoading(true); // 🔄 Loaderni yoqamiz
      setTimeout(() => {
        setLoading(false);
        navigate("/Auth_Reset_Password");
      }, 2000); // 2 soniyadan so‘ng navigatsiya
    }
  };

  const disabled = email.trim() === '';

  return (
    <>
      {loading && <Loading />}
      <div className='auth_forgot_password'>

        <div className="auth_forgot_left">
          <div className="auth_forgot_left_text">
            <h2 className="auth_forgot_left_title">Welcome to Devias Kit PRO</h2>
            <p className="auth_forgot_left_paragraph">
              A professional kit that comes with ready-to-use MUI components developed with one common goal in mind, help you build faster & beautiful applications.
            </p>
            <b className="auth_forgot_left_bold">Join 6,000+ forward-thinking companies:</b>
          </div>

          <div className="auth_forgot_left_icons">
            <img src={auth_samsung} alt="" />
            <img src={auth_visma} alt="" />
            <img src={auth_bolt} alt="" />
            <img src={auth_aws} alt="" />
            <img src={auth_accenture} alt="" />
            <img src={auth_att} alt="" />
          </div>
        </div>

        <div className="auth_forgot_right">
          <div className="auth_forgot_right_logo">
            <img src={auth_logo} alt="" className='auth_login_in_right_logo_img' />
            <p className='auth_forgot_right_logo_p'>Devias Kit <span id='login_in_pro'>PRO</span></p>
          </div>

          <div className="auth_forgot_right_dash">
            <FaArrowLeft className='auth_forgot_right_dash_icon' />
            <p className='auth_forgot_right_dash_p'>Dashboard</p>
          </div>

          <h3 className="auth_forgot_right_heading">Forgot password</h3>

          <div className="auth_forgot_right_input">
            <input
              type="email"
              placeholder='Email address'
              className='auth_forgot_right_input_1'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className='auth_forgot_right_input_btn'
              onClick={handleSendReset}
              disabled={disabled || loading}
            >
              Send reset link
            </button>

            <img src={auth_setting} alt="" className='auth_forgot_right_setting' />
          </div>
        </div>

      </div>
    </>
  );
};

export default Auth_Forgot_Password;
