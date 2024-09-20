import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouter = () => {
  const userdata = localStorage.getItem("loginData");
  const user = JSON.parse(userdata);

  if (user?.token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRouter;
