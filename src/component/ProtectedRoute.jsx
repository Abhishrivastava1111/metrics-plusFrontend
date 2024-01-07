import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { authActions } from "../store/auth-slice";
import SignUpForm from "../SignUp";
import Dashboard from "../Dashboard";
import Landing from "../AdminControllers/Landing";
import DoctorLanding from "../DoctorControllers/CommonLanding";
import Error from "../Error";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn && localStorage.getItem("logicCredentials")) {
    console.log("Without redux but with local storage");

    var data = JSON.parse(localStorage.getItem("logicCredentials"));
    var arrOfRoles = data.roles;

    dispatch(authActions.login({ userName: data.userName, role: arrOfRoles }));
    dispatch(authActions.setAccessToken({ accessToken: data.accessToken }));
    dispatch(
      authActions.setRefreshToken({
        responseToken: data.responseToken,
      })
    );
  }
  const email = useSelector((state) => state.auth.userName);
  const roles = useSelector((state) => state.auth.roles);

  console.log(roles);
  //   console.log(isLoggedIn);
  //   console.log(email);
  const DoctorRoutes = (
    <>
      <Route path="/" element={<Dashboard element={<DoctorLanding />} />} />
      <Route path="/about" element={<Home />} />
      <Route path="/products" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/addPatient" element={<SignUpForm />} />
      <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      />
    </>
  );
  const routesForUnAuthUser = (
    <>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/about" element={<Home />} />
      <Route path="/products" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      />
    </>
  );

  const routesForAdmin = (
    <>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Dashboard element={<Landing />} />} />
      <Route path="/addUser" element={<SignUpForm />} />
      <Route path="/about" element={<Home />} />
      <Route path="/products" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      />
    </>
  );
  const routesForCompounder = (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/addpatient" element={<SignUpForm />} />
      <Route path="/about" element={<Home />} />
      <Route path="/products" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      />
    </>
  );
  const routesForPatient = (
    <>
      <Route path="/" element={<Dashboard />} />

      <Route path="/about" element={<Home />} />
      <Route path="/products" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      />
    </>
  );

  const findRoute = () => {
    if (!isLoggedIn) {
      return routesForUnAuthUser;
    }
    console.log(selectedRole);
    if (selectedRole === "" || roles.length == 1) selectedRole = roles[0];

    switch (selectedRole) {
      case "DOCTOR":
        return DoctorRoutes;

      case "ADMIN":
        return routesForAdmin;
      case "COMPOUNDER":
        return routesForCompounder;
      case "PATIENT":
        return routesForPatient;
      default:
        console.log("******&&&&&&&&&&&&");
        break;
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Routes> {findRoute()} </Routes>
      ) : (
        <Routes> {findRoute()} </Routes>
      )}
    </div>
  );
};
export default ProtectedRoute;
