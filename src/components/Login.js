import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { Icon } from "react-icons-kit";
import Login_img from "./Login_img";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [passwordeye, setPasswordeye] = useState("password");

  const navigate = useNavigate();

  const hanldeSubmitLogin = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://63be78edf5cfc0949b58277e.mockapi.io/api`)
      .then((res) => {
        // setAllUserData(res.data);
        const userSpacificData = res.data.filter(
          (val) => val.email === email && val.password === password
        );

        if (userSpacificData.length === 0) {
          setErrorMsg("User not found!");
        } else {
          localStorage.setItem(
            "employeId",
            JSON.stringify(userSpacificData[0])
          );
          navigate("/profile");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("employeId")) {
      navigate("/profile");
    }
  }, []);

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form
            className="container"
            style={{ marginTop: "20%", marginRight: "30%"}}
            onSubmit={hanldeSubmitLogin}
          >
            <section className="d-flex justify-content-left">
              <div className="row" style={{ textAlign: "left" }}>
                <div className="card-header">
                  <h1
                    className="font-bold text-3xl text-center  tracking-wider"
                    style={{ textAlign: "center", color: "blue" }}
                  >
                    Login to User account
                  </h1>
                </div>
                {errorMsg && (
                  <div className="text-red-600 font-bold">
                    User Email or Password not valid !
                  </div>
                )}
                <div className="card-body">
                  <div className="" style={{ backgroundColor: "ButtonShadow" }}>
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
                    &nbsp;
                    <div className="col-lg-10">
                      <div className="form-group ">
                        <label>
                          Password<spn className="errmsg">*</spn>
                        </label>
                        <div className="input-field">
                          <input
                            type={passwordeye}
                            // className="form-control mb-3 col-lg-6"
                            placeholder="************"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {passwordeye === "password" ? (
                            <span
                              className="icon-span"
                              onClick={() => setPasswordeye("text")}
                            >
                              <Icon icon={basic_eye_closed} size={18} />
                            </span>
                          ) : (
                            <span
                              className="icon-span"
                              onClick={() => setPasswordeye("password")}
                            >
                              <Icon icon={basic_eye} size={18} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    &nbsp;
                  </div>
                  <br/>
                    <div className="cl-lg-6">
                  <div className="card-footer">
                      <input
                        type="submit"
                        className="btn btn-outline-primary hover:bg-indigo-600 rounded  col-lg-6"
                        value="Login"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <p className="mt-3">
                        <Link
                          to="/forgotpassword"
                          className="text-indigo-600 hover:underline"
                        >
                          Forgot Password?
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <p className="mt-3">
                        Create New Account?{" "}
                        <Link
                          to="/signup"
                          className="text-indigo-600 hover:underline"
                        >
                          Signup &rarr;
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
          <Login_img />
            </section>
          </form>
          {/* <ToastContainer/> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
