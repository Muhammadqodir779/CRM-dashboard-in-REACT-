import React, { useState } from 'react';
import "./Auth_Register.css";
import auth_samsung from "../../assets/auth_samsung.png";
import auth_visma from "../../assets/auth_visma.png";
import auth_bolt from "../../assets/auth_bolt.png";
import auth_aws from "../../assets/auth_aws.png";
import auth_accenture from "../../assets/auth_accenture.png";
import auth_att from "../../assets/auth_att.png";
import auth_logo from "../../assets/auth_logo.png";
import auth_setting from "../../assets/auth_setting.png";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import Loading from "../../components/loading/Loading";


const Auth_Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false); // 🔄 loading state

  const navigate = useNavigate();

  const handleRegister = () => {
    if (name && email && password && acceptedTerms) {
      setLoading(true); // Loader ko‘rsatish
      setTimeout(() => {
        setLoading(false);
        navigate("/analytics");
      }, 2000);
    }
  };

  const disabled = !(name && email && password && acceptedTerms);

  return (
    <>
      {loading && <Loading />}
      <div className='auth_register'>
        <div className="auth_register_left">
          <div className="auth_register_left_text">
            <h2 className="auth_register_left_title">Welcome to Devias Kit PRO</h2>
            <p className="auth_register_left_paragraph">
              A professional kit that comes with ready-to-use MUI components developed with one common goal in mind, help you build faster & beautiful applications.
            </p>
            <b className="auth_register_left_bold">Join 6,000+ forward-thinking companies:</b>
          </div>
          <div className="auth_register_left_icons">
            <img src={auth_samsung} alt="" />
            <img src={auth_visma} alt="" />
            <img src={auth_bolt} alt="" />
            <img src={auth_aws} alt="" />
            <img src={auth_accenture} alt="" />
            <img src={auth_att} alt="" />
          </div>
        </div>

        <div className="auth_register_right">
          <div className="auth_register_right_logo">
            <img src={auth_logo} alt="" className='auth_login_in_right_logo_img' />
            <p className='auth_register_right_logo_p'>Devias Kit <span id='login_in_pro'>PRO</span></p>
          </div>

          <div className="auth_register_right_dash">
            <FaArrowLeft className='auth_register_right_dash_icon' />
            <p className='auth_register_right_dash_p'>Dashboard</p>
          </div>

          <h3 className="auth_register_right_heading">Register</h3>

          <p className='auth_register_right_p'>Already have an account?
            <Link to={"/"} className='auth_register_right_link'> Login</Link>
          </p>

          <div className="auth_register_right_input">
            <input
              type="text"
              placeholder='Name'
              className='auth_register_right_input_3'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder='Email Address'
              className='auth_register_right_input_1'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder='Password'
              className='auth_register_right_input_2'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className='auth_register_right_check'>
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              I have read the Terms and Conditions
            </p>

            <button
              className='auth_register_right_input_btn'
              onClick={handleRegister}
              disabled={disabled || loading}
            >
              Register
            </button>

            <img src={auth_setting} alt="" className='auth_register_right_setting' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth_Register;
