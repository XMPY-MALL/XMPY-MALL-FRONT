import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { ADMIN_ROUTES, PUBLIC_ROUTES, USER_ROUTES } from "../constants/menu";
import UserRoute from "./UserRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/*  일단, MainLayout창만 구성하기... */}
      {/* 2. MainLayout으로 들어감 */}
      <Route element={<MainLayout />}>
        {PUBLIC_ROUTES.map((route) => {
          return (
            <Route key={route.id} path={route.path} element={route.element} />
          );
        })}
        {/* 위에 PUBLIC_ROUTES들을 mapping을 한 자식 Route들이  "MainLayout의 Outlet안" 에 들어간다 */}
        <Route element={<UserRoute />}>
          {USER_ROUTES.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}
        </Route>
        {ADMIN_ROUTES.map((route) => {
          return (
            <Route key={route.id} path={route.path} element={route.element} />
          );
        })}
      </Route>
    </Routes>
  );
}
