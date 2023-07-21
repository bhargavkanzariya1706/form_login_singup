import React, { useEffect, useState } from "react";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import Icon from "react-icons-kit";
import axios from "axios";
import CryptoJS from "crypto-js";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function ResetPage() {
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [newpasswordeye, setNewPasswordeye] = useState("password");
  const [confirmpasswordeye, setConfirmPasswordeye] = useState("password");

  // const navigat=useNavigate();
  const params = useParams();
  console.log(params["*"]);
  useEffect(() => {
    decryptAES();
  }, []);

  // const decryptAES = () => {
  //   const decrypted = CryptoJS.AES.decrypt(params["*"], "one");
  //   if (decrypted) {
  //     try {
  //       const decryptedData = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  //       console.log(decryptedData);

  //       return decryptedData;
  //     } catch (error) {
  //       console.error("Error while decrypting data:", error);
  //       return null;
  //     }
  //   }
  //   return null;
  // };

  const decryptAES = () => {
    const decrypted = CryptoJS.AES.decrypt(params["*"], "one");
    if (decrypted) {
      try {
        const str = decrypted.toString(CryptoJS.enc.Utf8);
        console.log(str);
        if (str.length > 0) {
          return str;
        } else {
          return "error 1";
        }
      } catch (e) {
        return "error 2";
      }
    }
    return "error 3";
  };

  // const encryptedData = "...";
  // const decryptionResult = decryptAES(encryptedData, "your_secret_key");

  // if (decryptionResult && decryptionResult.isValid) {
  //   console.log("Decrypted Employee ID:", decryptionResult.employeId);
  // } else {
  //   console.log("Invalid or expired data.");
  // }

  const handlepasswordSubmit = async () => {
    try {
      const empPassword = {
        password: password,
      };
      const response = await axios.put(
        "https://63be78edf5cfc0949b58277e.mockapi.io/api",
        empPassword
      );
      setPassword(response.data);
    } catch (error) {
      alert("Error occurred while submitting the password.");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form
            className="container"
            style={{ marginTop: "20%", marginRight: "30%" }}
            onSubmit={handlepasswordSubmit}
          >
            <section className="d-flex justify-content-left">
              <div className="card" style={{ textAlign: "left" }}>
                <div className="card-header">
                  <h1
                    className="font-bold text-3xl text-center  tracking-wider"
                    style={{ textAlign: "center", color: "blue" }}
                  >
                    Reset Password
                  </h1>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "ButtonFace" }}
                >
                  <div className="">
                    <div className="col-lg-8">
                      <div className="form-group">
                        New Password <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type={newpasswordeye}
                            // className="form-control mg-3 col-lg-6"
                            placeholder="**********"
                            value={password}
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {newpasswordeye === "password" ? (
                            <span
                              className="icon-span"
                              onClick={() => setNewPasswordeye("text")}
                            >
                              <Icon icon={basic_eye_closed} size={18} />
                            </span>
                          ) : (
                            <span
                              className="icon-span"
                              onClick={() => setNewPasswordeye("password")}
                            >
                              <Icon icon={basic_eye} size={18} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-lg-8">
                      <div className="form-group">
                        Confirm Password <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type={confirmpasswordeye}
                            //   className="form-control"
                            placeholder="**********"
                            value={Confirmpassword}
                            name="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          {confirmpasswordeye === "password" ? (
                            <span
                              className="icon-span"
                              onClick={() => setConfirmPasswordeye("text")}
                            >
                              <Icon icon={basic_eye_closed} size={18} />
                            </span>
                          ) : (
                            <span
                              className="icon-span"
                              onClick={() => setConfirmPasswordeye("password")}
                            >
                              <Icon icon={basic_eye} size={18} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <br />
                    <div className="cl-lg-6">
                      <div className="card-footer">
                        <input
                          type="submit"
                          className="btn btn-outline-success rounded-pill  col-lg-6"
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

export default ResetPage;
