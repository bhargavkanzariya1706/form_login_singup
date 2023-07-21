import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import Userchart from "./components/Userchart";
import ForgotPassword from "./components/ForgotPassword";
import ResetPage from "./components/ResetPage";
import Error404 from "./components/Error404";
import './Css/Bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            Login
          </Route>
          <Route path="/signup" element={<Signup />}>
            Signup
          </Route>
          <Route path="/profile" element={<Profile />}>
            Profile
          </Route>
          <Route path="/userchart" element={<Userchart />}>
            UserChart
          </Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}>
            ForgotPassword
          </Route>
          <Route path="/reset/*" element={<ResetPage/>}>
            ForgotPassword
          </Route>
          <Route path="/404eror" element={<Error404/>}>
            ForgotPassword
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
