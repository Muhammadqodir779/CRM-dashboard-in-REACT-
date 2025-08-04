import React, { useState } from 'react';
import "./AuthLoginIn.css";
import auth_samsung from "../../assets/auth_samsung.png";
import auth_visma from "../../assets/auth_visma.png";
import auth_bolt from "../../assets/auth_bolt.png";
import auth_aws from "../../assets/auth_aws.png";
import auth_accenture from "../../assets/auth_accenture.png";
import auth_att from "../../assets/auth_att.png";
import auth_logo from "../../assets/auth_logo.png";
import auth_setting from "../../assets/auth_setting.png";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const AuthLoginIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/analytics");
      }, 2000);
    }
  };

  const disabled = email.trim() === '' || password.trim() === '' || loading;

  return (
    <>
      {loading && (
        <div className="fullscreen_loader">
          <div className="spinner"></div>
        </div>
      )}

      <div className='auth_login_in'>
        <div className="auth_login_in_left">
          <div className="auth_login_in_left_text">
            <h2 className="auth_login_in_left_title">Welcome to Devias Kit PRO</h2>
            <p className="auth_login_in_left_paragraph">
              A professional kit that comes with ready-to-use MUI components developed with one common goal in
              mind, help you build faster & beautiful applications.
            </p>
            <b className="auth_login_in_left_bold">Join 6,000+ forward-thinking companies:</b>
          </div>

          <div className="auth_login_in_left_icons">
            <img src={auth_samsung} alt="" />
            <img src={auth_visma} alt="" />
            <img src={auth_bolt} alt="" />
            <img src={auth_aws} alt="" />
            <img src={auth_accenture} alt="" />
            <img src={auth_att} alt="" />
          </div>
        </div>

        <div className="auth_login_in_right">
          <div className="auth_login_in_right_logo">
            <img src={auth_logo} alt="" className='auth_login_in_right_logo_img' />
            <p className='auth_login_in_right_logo_p'>Devias Kit <span id='login_in_pro'>PRO</span></p>
          </div>

          <div className="auth_login_in_right_dash">
            <FaArrowLeft className='auth_login_in_right_dash_icon' />
            <p className='auth_login_in_right_dash_p'>Dashboard</p>
          </div>

          <h3 className="auth_login_in_right_heading">Log in</h3>

          <p className='auth_login_in_right_p'>Don't have an account?
            <Link to={"/auth_register"} className='auth_login_in_right_link'>
              Register
            </Link>
          </p>

          <div className="auth_login_in_right_input">
            <input
              type="email"
              placeholder='Email Address'
              className='auth_login_in_right_input_1'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder='Password'
              className='auth_login_in_right_input_2'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className='auth_login_in_right_input_btn'
              onClick={handleContinue}
              disabled={disabled}
            >
              Continue
            </button>

            <Link to={"/auth_forgot_password"} className='auth_login_in_right_input_link'>
              Forgot password?
            </Link>

            <img src={auth_setting} alt="" className='auth_login_in_right_setting' />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLoginIn;
