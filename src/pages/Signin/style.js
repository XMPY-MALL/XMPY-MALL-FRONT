
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  min-height: calc(100vh - 100.67px - 521.33px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 70px;
  background-color: #F8F6F1;
`;

export const signinBox = css`
  width: 450px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



export const title = css`
  text-align: center;
  margin-bottom: 8px;
  color: #1A1A1A;
  font-size: 20px;
  font-weight: 450;
  cursor: default;
`;

export const formBox = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 5px;
`;

export const inputBox = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > label {
    font-size: 14px;
    font-weight: 500;
    color: #1A1A1A;
  }

  & > input {
    padding: 12px 16px;
    font-size: 14px;
    border: 1px solid #E8E2D9;
    border-radius: 4px;
    background-color: #fff;

    &:focus {
      outline: none;
      border-color: #C4A882;
    }

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const btn = css`
  padding: 8px;
  font-size: 15px;
  font-weight: 500;
  background-color: #6B6560;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 4px;
  margin-top: 3px;
  width: 100%;

  &:hover {
    background-color: #1A1A1A;
  }

  &:disabled {
    background-color: #E8E2D9;
    cursor: not-allowed;
  }
`;

export const signupTextBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const signupText = css`
  color: #1A1A1A;
  font-size: 14px;
  cursor: default;
`;

export const signupLink = css`
  text-decoration: none;
  font-size: 14px;
  color: #C4A882;
`;
