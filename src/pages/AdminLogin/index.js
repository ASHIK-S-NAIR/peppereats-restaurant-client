import React, { useState } from "react";
import { adminLogin, authenticate } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    userEmail: "",
    userPassword: "",
  });

  const { userEmail, userPassword } = values;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await adminLogin(userEmail, userPassword);
      if (data.error) {
        return console.log(data.error);
      }
      authenticate(data);
      return navigate("/adminpanel/reservation");
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <section className="adminLogin-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-aos="fade-up">Admin Login</h2>
          </div>
        </div>
        <div className="row">
          <form className="adminLogin-form form" onSubmit={onSubmit}>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-input"
                value={userEmail}
                onChange={(e) =>
                  setValues({ ...values, userEmail: e.target.value })
                }
              />
            </div>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-input"
                value={userPassword}
                onChange={(e) =>
                  setValues({ ...values, userPassword: e.target.value })
                }
              />
            </div>
            <div className="form-input-sec">
              <button className="btn form-button" onClick={onSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
