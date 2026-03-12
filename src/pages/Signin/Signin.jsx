import React from "react";
/** @jsxImportSource @emotion/react */
import { useSigninMutation } from "./hooks/useSignin";
import * as s from "./style";
import { css } from "@emotion/react";
import logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";

export default function Signin() {
  // const {formVal, handleChange} = useForm({
  //     username: "",
  //     password: ""
  // });
  const { formVal, handleChange } = useForm({
    email: "",
    password: "",
    // 위에 친구들이 initVal(매개변수)
  });

  const { isPending, mutate, errorMessage } = useSigninMutation();
  // mutate안에는 mutateFn, onSuccess, onError이 모두 포함되어있다

  // 로그인 버튼을 눌렀을때, 실행되는 코드
  const handleSignin = () => {
    console.log(formVal);
    mutate(
      formVal,
      // mutate가 성공하면 실행한다.
      {
        onSuccess: () => {
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
          // 디버깅용 (토큰) - 로그인 성공시 발급되는 토큰
        },
      },
      // onSuccess코드를 통해
      // useSignin.js의 onSuccess도 같이 실행된다
    );
  };

  return (
    <div css={s.container}>
      <div css={s.signinBox}>
        <h1 css={s.title}>로그인</h1>
        <p
          css={s.title}
          style={{ fontSize: "14px", color: "#6B6560", marginBottom: "20px" }}
        >
          XMPY-MALL에 오신 것을 환영합니다
        </p>

        <div css={s.formBox}>
          <div css={s.inputBox}>
            <label>이메일</label>
            <input
              type="text"
              value={formVal.email}
              name="email"
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div css={s.inputBox}>
            <label>패스워드</label>
            <input
              type="password"
              value={formVal.password}
              name="password"
              onChange={handleChange}
              placeholder="패스워드를 입력하세요"
            />
          </div>

          <button css={s.btn} onClick={handleSignin} disabled={isPending}>
            {/* disabled = {isPending} : isPending이 true면 버튼비활성화, false면 버튼활성화 */}
            {isPending ? "로그인중" : "로그인"}
          </button>

          {/* 이거 추가 */}
          {errorMessage && (
              <p style={{ color: 'red', fontSize: '13px', textAlign: 'center', marginTop: '-10px' }}>
                  {errorMessage}
              </p>
          )}
        </div>
      </div>
    </div>
  );
}