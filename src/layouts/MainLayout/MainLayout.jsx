/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as s from "./styles";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    // Header, main, Footer로 들어감
    <div css={s.layout}>
      {/* 헤더부분임... */}
      <Header />

      {/* 메인(중간)부분 */}
      <main css={s.main}>
        <Outlet />
      </main>

      {/* 맨아래부분 */}
      <Footer />
    </div>
  );
}
