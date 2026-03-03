/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useRef, useState } from "react";
import FormInput from "./components/FormInput";
import { useForm } from "../../hooks/useForm";
import { useSignupMutation, useSignupValidation } from "./hooks/useSignup";
import { Link } from "react-router-dom";
import * as s from "./styles"

export default function Signup() {
  const { formVal, handleChange } = useForm({
    userName: "",
    email: "",
    userPassword: "",
    passwordConfirm: "",
    address: "",
    userPhone: "",
    // 순서는 따로 안 맞춰도 된다..
  });

  const [errors, setErrors] = useState({});
  const { mutate, isPending } = useSignupMutation();
  const { newError, isAllValidate } = useSignupValidation(formVal);

  // 포커스 이동 ( 2번째부터 마지막 직전까지 걸어주기 )
  // 그렇게 해야, 첫번째에서 -> 두번째로 ~ 마지막두번째에서 ~ 마지막번째로 이어짐
  const emailRef = useRef(null);
  const userPasswordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const addressRef = useRef(null);
  const userPhoneRef = useRef(null);

  const handleUsernameKeyDown = (e) => {
    if (e.key === "Enter") {
      emailRef.current.focus();
    }
  };

  const handleEmailKeyDown = (e) => {
    if (e.key === "Enter") {
      userPasswordRef.current.focus();
    }
  };

  const handleUserPassWordKeyDown = (e) => {
    if (e.key === "Enter") {
      passwordConfirmRef.current.focus();
    }
  };

  const handlePasswordConfirmKeyDown = (e) => {
    if (e.key === "Enter") {
      addressRef.current.focus();
    }
  };

  const handleAdressKeyDown = (e) => {
    if (e.key === "Enter") {
      userPhoneRef.current.focus();
    }
  };

  const handleUserPhoneKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (isPending) return;
    // FE의 validation
    if (!isAllValidate) {
      setErrors(newError);
      return;
    }
    // spread - rest문법
    const { passwordConfirm, ...signupDto } = formVal;
    // passwordConfirm만 빼고 나머지들이 전송된다!!...
    mutate(signupDto, {
      onError: (error) => {
        const adiviceError = error?.response?.data;
        if (error.response.status === 400 && Array.isArray(adiviceError)) {
          let trimedError = {};
          // [{username: "~~"}, {password: "~"}]
          // -> {username: "~~", password: "~"}
          for (let errorObj of adiviceError) {
            trimedError = { ...trimedError, ...errorObj };
          }
          setErrors(trimedError);
        }
      },
    });
  };

  return (
    <div css={s.container}>
      <div css={s.formWrapper}>
        <h1 css={s.title}>회원가입</h1>
        <div css={s.inputList}>
          <FormInput
            type="text"
            label="이름"
            name="userName"
            value={formVal.userName}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            error={errors.userName}
            onKeyDown={handleUsernameKeyDown}
          />
          <FormInput
            type="email"
            label="이메일"
            name="email"
            value={formVal.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
            error={errors.email}
            onKeyDown={handleEmailKeyDown}
          />
          <FormInput
            type="password"
            label="비밀번호"
            name="userPassword"
            value={formVal.userPassword}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            error={errors.password}
            ref={userPasswordRef}
            onKeyDown={handleUserPassWordKeyDown}
          />
          <FormInput
            type="password"
            label="비밀번호 확인"
            name="passwordConfirm"
            value={formVal.passwordConfirm}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력해주세요"
            error={errors.passwordConfirm}
            ref={passwordConfirmRef}
            onKeyDown={handlePasswordConfirmKeyDown}
          />
          <FormInput
            type="text"
            label="주소"
            name="address"
            value={formVal.address}
            onChange={handleChange}
            placeholder="주소를 입력하세요"
            error={errors.address}
            ref={addressRef}
            onKeyDown={handleAdressKeyDown}
          />
          <FormInput
            type="text"
            label="전화번호"
            name="userPhone"
            value={formVal.userPhone}
            onChange={handleChange}
            placeholder="전화번호를 입력하세요"
            error={errors.userPhone}
            ref={userPhoneRef}
            onKeyDown={handleUserPhoneKeyDown}
          />
          {/* css 설정은 나중에 해야 한다 */}
          <button css={s.submitButton} onClick={handleSubmit}>회원가입</button>
          <div css={s.loginLink}>
            <span>이미 계정이 있으신가요?</span>
            <Link to="/signin">로그인</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
