import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 60px;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;

    position: relative;
`;

export const logo = css`
    & > img {
        height: 35px;
        width: auto;
    }
`;

export const nav = css`
    display: flex;
    gap: 40px;
    font-size: 13px;
    color: #222;
    text-decoration: none;
    letter-spacing: 0.03em;

    &:hover {
        color: #000;
    }
`;

export const navLink = css`
    font-size: 13px;
    color: #222;
    text-decoration: none;
    letter-spacing: 0.03em;

    &:hover {
        color: #000;
        font-weight: 600;
    }
`;

export const userSection = css`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const myPageLink = css`
    font-size: 13px;
    color: #222;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
        color: #000;
    }

    & > svg {
        font-size: 16px;
    }
`;

export const loginLink = css`
    font-size: 13px;
    color: #222;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
        color: #000;
    }

    & > svg {
        font-size: 16px;
    }
`;