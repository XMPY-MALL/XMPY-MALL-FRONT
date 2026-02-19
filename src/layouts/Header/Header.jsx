/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import * as s from "./styles"
import {  MENU_ITEMS_LEFT, MENU_ITEMS_RIGHT } from '../../constants/menu';
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import logo from "../../assets/logo.png"
import Signin from './../../pages/Signin/Signin';

export default function Header() {

    const navigate = useNavigate();
    const {isAuthenticated, logout} = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate("/"); // 홈 화면으로
    }


    return (
        <header css={s.container}>
            {/* Best, 아우터 */}
            <nav css={s.nav}>
                {MENU_ITEMS_LEFT.map((menu) => (
                    <Link key={menu.id} to={menu.path} css={s.navLink}>{menu.name}</Link>
                ))}
            </nav>

            {/* 로고 */}
            <Link to="/" css={s.logo}>
                <img src={logo} alt="logo" />
            </Link>

            {/* 상의, 하의 */}
            <nav css={s.nav}>
                {MENU_ITEMS_RIGHT.map((menu) => (
                    <Link key={menu.id} to={menu.path} css={s.navLink}>{menu.name}</Link>
                ))}
            </nav>

            {/* 3. 마이페이지와 로그아웃 상단바 */}
            <div css={s.userSection}>
                {
                isAuthenticated ?
                (
                    <>
                        <Link to="/mypage">
                        {/* 아직 publicRoutes에 안적음 */}
                            <AiOutlineUser />
                            <span>마이페이지</span>
                        </Link>

                        <button onClick={handleLogout}>
                            <AiOutlineLogout />
                            <span>로그아웃</span>
                        </button>
                    </>
                )
                :
                (
                    <>
                        <Link to="/Signin" css={s.loginLink}>
                            <AiOutlineLogin/>
                            <span>로그인</span>
                        </Link>
                    </>
                )
                }
            </div>

        </header>
    );
}

