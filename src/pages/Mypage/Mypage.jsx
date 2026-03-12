import { jwtDecode } from "jwt-decode";
import React from "react";
import UserPage from "./pages/UserPage";
import OwnerPage from "./pages/OwnerPage";

export default function Mypage() {
  return <UserPage />;
  const accessToken = localStorage.getItem("accessToken");
  // 아하 localStorage를 이런식으로 활용하는 거구나!!

  // accessToken이 존재하지 않으면,
  // 바로 "로그인창으로 이동"하게끔 코드를 작성해두자
  if (!accessToken) {
    setTimeout(() => {
      window.location.href = "/Signin";
    });
  }
  /*
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    */
  const decoded = jwtDecode(accessToken);
  // jwtDecode의 뜻은 기존의 토큰을 갖다가
  /*
        {sub: '8', iat: 1772335787, exp: 1772337587, role: 1}
        이런식으로 토큰을 분해시키는 라이브러리
    */
  if (decoded.role === 1) {
    return <UserPage />;
    // 만약 role_id가 1이면, UserPage로 이동
  } else if (decoded.role === 2) {
    return <OwnerPage />;
    // 만약 role_id가 2이면, OwnerPage로 이동
  }
}
