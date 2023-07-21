import React, { useState, useEffect } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("employeId"));
    setData(localData);

    if (!localData) {
      toast.error("Please  Login", { position: "top-center" });
      navigate("/");
    }

    console.log(localData);
  }, []);

  const logout = () => {
    localStorage.removeItem("employeId");
    navigate("/");
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" style={{ marginTop: "5%" }}>
            <div style={{ textAlign: "left" }}>
              <div className="card-title">
                <h1
                  className="text-center text-4xl py-2 bg-indigo-500 text-indigo-50 rounded max-sm:text-2xl"
                  style={{ textAlign: "center" }}
                >
                  User Detail
                </h1>

                <div className="bg-white rounded my-8 w-11/12 mx-auto ">
                  <div className="my-4">
                    <p className="text-slate-400">Emp ID</p>
                    <p className="text-slate-700 border-b">{data.employeId}</p>
                  </div>
                  <div className="my-4">
                    <p className="text-slate-400">Name</p>
                    <p className="text-slate-700 border-b">{data.name}</p>
                  </div>

                  <div className="my-4">
                    <p className="text-slate-400">Email</p>
                    <p className="text-slate-700 border-b">{data.email}</p>
                  </div>
                  <div className="my-4">
                    <p className="text-slate-400">Age</p>
                    <p className="text-slate-700 border-b">{data.age}</p>
                  </div>
                  <div className="my-4">
                    <p className="text-slate-400">Salary</p>
                    <p className="text-slate-700 border-b">{data.salary}</p>
                  </div>
                  <div className="my-4">
                    <p className="text-slate-400">Gender</p>
                    <p className="text-slate-700 border-b">{data.gender}</p>
                  </div>
                  <div className="my-4">
                    <p className="text-slate-400">Department</p>
                    <p className="text-slate-700 border-b">{data.department}</p>
                  </div>

                  <div className="Logout text-center my-4">
                    <button
                      className="btn btn-danger  bg-500 text-50 p-2  hover:bg-indigo-600 rounded"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                  <div className="Logout text-center my-4">
                    <NavLink
                      className="btn btn-success  bg-500 text-50 p-2  hover:bg-indigo-600 rounded"
                       to="/userchart"
                    >
                      All Employe Salary Chart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Profile;
