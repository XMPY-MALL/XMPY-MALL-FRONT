import { css } from "@emotion/react";

export const container = css`
  min-height: calc(100vh - 200px);
  background-color: #f8f6f1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
`;

export const formWrapper = css`
  width: 100%;
  max-width: 360px; /* 480px → 360px */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const title = css`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
  text-align: center;
`;

export const subtitle = css`
  font-size: 14px;
  color: #6b6560;
  margin-bottom: 32px;
  text-align: center;
`;

export const inputList = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const submitButton = css`
  width: 100%;
  padding: 14px;
  background-color: #6b6560;
  color: #f8f6f1;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a1a1a;
  }
`;

export const loginLink = css`
  font-size: 13px;
  color: #6b6560;
  text-align: center;
  margin-top: 12px;

  a {
    color: #c4a882;
    font-weight: 600;
    text-decoration: none;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
