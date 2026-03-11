import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserRoute() {
  const accessToken = localStorage.getItem("accessToken");

  // if (!accessToken) {
  //   toast.error("로그인이 필요합니다");
  //   return <Navigate to="/signin" replace />;
  // }

  return <Outlet />;
}
