import React, { useState } from "react";
import "./style.css";

const CustomerSignup = () => {
  const [values, setValues] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
  });

  const { userFirstName, userLastName, userEmail } = values;

  const onSubmit = async () => {
    //
  };

  return (
    <section className="customerSignup-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-aos="fade-up">How should we great You</h2>
          </div>
        </div>
        <div className="row">
          <form className="customerSignup-form form" onSubmit={onSubmit}>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-input"
                value={userFirstName}
                onChange={(e) =>
                  setValues({ ...values, userFirstName: e.target.value })
                }
              />
            </div>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-input"
                value={userLastName}
                onChange={(e) =>
                  setValues({ ...values, userLastName: e.target.value })
                }
              />
            </div>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                value={userEmail}
                onChange={(e) =>
                  setValues({ ...values, userEmail: e.target.value })
                }
              />
            </div>
            <div className="form-input-sec">
              <button className="btn form-button" onClick={onSubmit}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerSignup;
