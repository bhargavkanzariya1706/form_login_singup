import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import Icon from "react-icons-kit";
 

function Signup() {
  const [data, setData] = useState([]);
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [passwordeye, setPasswordeye] = useState("password");

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter a value in ";
    if (empId === null || empId === "") {
      isproceed = false;
      errormessage += " Empolye ID";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Empolye Name";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (age === null || age === "") {
      isproceed = false;
      errormessage += " Age";
    }
    if (salary === null || salary === "") {
      isproceed = false;
      errormessage += " Salary";
    }
    if (gender === null || gender === "") {
      isproceed = false;
      errormessage += " Select Gender";
    }
    if (department === null || department === "") {
      isproceed = false;
      errormessage += " Select Department";
    }

    if (!isproceed) {
      toast.warning(errormessage, { position: "top-center" });
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isproceed = false;
      toast.warning("Plz enter your valid email : in character (ex:@) ", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error(" Plz Enter Valid Email @ Address", {
        position: "top-center",
      });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(
        password
      )
    ) {
      isproceed = false;
      toast.warning(
        "Plz enter your valid Password : Minimum 8 & Maximum 12 characters, at least one uppercase letter (ex:ABC), one lowercase letter (ex:abc), one number (ex:123) and one special character (ex:@)",
        {
          position: "top-center",
        }
      );
    }

    return isproceed;
  };

  const handlegender = (e) => {
    setGender(e.target.value);
  };
  const navigate = useNavigate();

  const EmployeDataADD = async (e) => {
    e.preventDefault();

    const empdata = {
      employeId: empId,
      name: name,
      email: email,
      password: password,
      age: age,
      salary: salary,
      gender: gender,
      department: department,
    };
    if (IsValidate()) {
      await axios
        .post(`https://63be78edf5cfc0949b58277e.mockapi.io/api`, empdata)
        .then((res) => {
          navigate("/");
          alert("Signup successfully", { position: "top-center" });
        })
        .catch((err) => {
          toast.error("Failed:" + err.message, { position: "top-center" });
        });
    }
  };
  useEffect(() => {
    const EmployeData = async () => {
      await axios
        .get(`https://63be78edf5cfc0949b58277e.mockapi.io/api`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    EmployeData();
  }, []);

  return (
    <div>
      {/* <div className="row"> */}
        <div className="offset-lg-3 col-lg-5">
          <form className="container" style={{ marginTop: "5%",marginBottom:"10%"}}>
            <section className="d-flex justify-content-between">
              <div className="card" style={{ textAlign: "left" }}>
                <div className="card-header">
                  <h1
                    className="font-bold text-3xl text-center  tracking-wider"
                    style={{ textAlign: "center", color: "green" }}
                  >
                    Create a new user account
                  </h1>
                </div>

                <div className="card-body">
                  <div
                    className="row"
                    // style={{ backgroundColor: "ButtonShadow" }}
                  >
                    <div className="col-lg-8">
                      <div className="form-group">
                        EMP ID <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type="number"
                            placeholder="Enter Id"
                            // className="form-control mg-3 col-lg-6"
                            name="employeId"
                            value={empId}
                            onChange={(e) => setEmpId(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-lg-8">
                      <div className="form-group">
                        Name <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type="text"
                            // className="form-control mg-3 col-lg-6"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-lg-8">
                      <div className="form-group">
                        Email <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type="text"
                            // required
                            // className="form-control mg-3 col-lg-6"
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-lg-8">
                      <div className="form-group">
                        Password <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type={passwordeye}
                            // className="form-control mg-3 col-lg-6"
                            placeholder="**********"
                            value={password}
                            name="password"
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
                    <div className="col-lg-8">
                      <div className="form-group">
                        Age <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type="number"
                            // className="form-control mg-3 col-lg-6"
                            placeholder="Enter Your Age"
                            // required
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-lg-8">
                      <div className="form-group">
                        Salary <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <input
                            type="number"
                            // className="form-control mg-3 col-lg-6"
                            placeholder="Enter Your Salary"
                            // required
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-lg-8">
                      <div className="form-group">
                        Gender : Male
                        <input
                          type="radio"
                          // required
                          name="gender"
                          className="app-check"
                          value="male"
                          checked={gender === "male"}
                          onChange={handlegender}
                        />
                        &nbsp; Female
                        <input
                          type="radio"
                          // required
                          name="gender"
                          className="app-check"
                          value="female"
                          checked={gender === "female"}
                          onChange={handlegender}
                        />
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-lg-8">
                      <div className="form-group">
                        Department <span className="errmsg">*</span>{" "}
                        <div className="input-field">
                          <select
                            type="select"
                            // required
                            // className="form-control mg-3 col-lg-6"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                          >
                            <option>Select Department</option>
                            <option value="It">IT</option>
                            <option value="Marketing">MARKETING</option>
                            <option value="Hr">HR</option>
                            <option value="Accountant & Finance">
                              ACCOUNTANT & FINANCE
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <br />
                    &nbsp;
                    <div className="col-lg-8">
                      <div className="card-footer">
                        <input
                          type="submit"
                          value="Signup"
                          onClick={EmployeDataADD}
                          className="btn btn-outline-success form-control mg-3 col-lg-6 "
                        />
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-lg-6">
                      <div className="form-group">
                        <p className="mt-3">
                          {" "}
                          Alredy have an account?{" "}
                          <Link
                            to="/"
                            className="text-indigo-600 hover:underline"
                          >
                            Login &rarr;
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
}

export default Signup;
