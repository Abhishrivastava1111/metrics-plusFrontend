import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import ProjectDetailsPage from "./ProjectDetailsPage";
import ResponsiveDrawer from "./ResponsiveDrawer";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const selectedRole = useSelector((state) => state.auth.role);

  if (!isLoggedIn && localStorage.getItem("logicCredentials")) {
    console.log("we are fetchin data from local storage");

    var data = JSON.parse(localStorage.getItem("logicCredentials"));

    dispatch(authActions.login({ userName: data.userName, role: data.role }));
    dispatch(authActions.setAccessToken({ accessToken: data.accessToken }));
    dispatch(
      authActions.setRefreshToken({
        responseToken: data.responseToken,
      })
    );
  }

  const routesForUnAuthUser = (
    <>
      <Route
        path="/"
        element={<ResponsiveDrawer element={ProjectDetailsPage} />}
      />
      <Route path="/projectDetails" element={<ProjectDetailsPage />} />
    </>
  );

  const routesForAdmin = (
    <>
      <Route path="/dashboard" element={<ResponsiveDrawer text={"some"} />} />
      {/* <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      /> */}
    </>
  );

  const routesForManager = (
    <>
      <Route path="/dashboard" element={<ResponsiveDrawer text={"some"} />} />
      <Route path="/projectDetails" element={<ProjectDetailsPage />} />
      {/* <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      /> */}
    </>
  );

  const routesForMentee = (
    <>
      <Route path="/dashboard" element={<ResponsiveDrawer text={"some"} />} />
      {/* <Route
        path="*"
        element={<Error message={"Invalid path please check the url"} />}
      /> */}
    </>
  );

  const findRoute = () => {
    if (!isLoggedIn) {
      return routesForUnAuthUser;
    }
    switch (selectedRole) {
      case "ADMIN":
        return routesForAdmin;
      case "MENTEE":
        return routesForMentee;
      case "MANAGER":
        return routesForManager;
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
