/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from "./styles";
import Header from "../Header/Header";
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function MainLayout() {
    return (
        // Header, main, Footer로 들어감
        <div css = {s.layout}>
            <Header/>
            {/* 헤더부분임... */}
            
            <main css={s.main}>
                <Outlet />
            </main>

            <Footer/>
            {/* 맨 아래 Footer부분 */}
        </div>
    );
}

