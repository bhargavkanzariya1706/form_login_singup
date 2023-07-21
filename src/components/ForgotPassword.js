import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const encryptData = (key) => {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(key),
      "your-secret-key"
    ).toString();
    return encryptedData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://63be78edf5cfc0949b58277e.mockapi.io/api`)
      .then((res) => {
        const UserData = res.data.filter((val) => val.email === email);

        if (UserData.length === 0) {
          setErrorMsg("User not found!");
        } else {
          localStorage.setItem("email", JSON.stringify(UserData[0]));

          // const resetData = {
          //   id: UserData[0].email,
          //   expireTime: new Date().getTime() + 30 * 60 * 1000, // 30 minutes from now
          // };
          console.log(UserData[0].email);

          const encryptedResetData = encryptData(UserData[0].email, "one");
          console.log(`Reset link: localhost:3000/reset/${encryptedResetData}`);
        }
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  };
  useEffect(() => {
    if (localStorage.getItem("employeId")) {
    }
  }, []);
  return (
    <div>
      <div className="">
        <div className="offset-lg-3 col-lg-5">
          <form
            className="container"
            style={{ marginTop: "20%", marginRight: "30%" }}
            onSubmit={handleSubmit}
          >
            <section className="d-flex justify-content-between">
              <div className="card" style={{ textAlign: "left" }}>
                <div className="card-header">
                  <h1
                    className="font-bold text-3xl text-center  tracking-wider"
                    style={{ textAlign: "center", color: "blue" }}
                  >
                    Forgot Password
                  </h1>
                </div>
                {errorMsg && (
                  <div className="text-red-600 font-bold">
                    User Email not valid !
                  </div>
                )}
                <div
                  className="card-body"
                  style={{ backgroundColor: "ButtonFace" }}
                >
                  <div className="">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          Email<spn className="errmsg">*</spn>
                        </label>
                        <div className="input-field">
                          <input
                            type="text"
                            // className="mb-3 col-lg-6"
                            placeholder="Enter Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="cl-lg-6">
                      <div className="card-footer">
                        <input
                          type="submit"
                          className="btn btn-outline-success rounded-pill col-lg-6"
                          value="Submit"
                        />
                        <NavLink
                          to="/"
                          type="button"
                          className="btn btn-outline-primary hover:bg-indigo-600 rounded-pill col-lg-6"
                        >
                          Cancel
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
