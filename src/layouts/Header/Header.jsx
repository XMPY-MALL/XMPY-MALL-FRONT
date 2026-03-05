/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import * as s from "./styles";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import Signup from './../../pages/Signup/Signup';
import Signin from './../../pages/Signin/Signin';
<<<<<<< HEAD
import { useCategories } from "../../constants/useCategories";
import { STATIC_MENU_ITEMS } from "../../constants/menu";
import CategoryDropdown from "./components/CategoryDropDown/CategoryDropDown";
=======
import Mypage from './../../pages/Mypage/Mypage';


>>>>>>> 5234de0 (비밀번호/주소/전화번호 수정페이지 완료)

export default function Header() {
  const navigate = useNavigate();
  const categories = useCategories();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header css={s.container}>
      {/* ── 1줄: 서브바 ── */}
      <div css={s.topBar}>
        {isAuthenticated ? (
          <button css={s.topBarLink} onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          <>
            <Link to="/Signup" css={s.topBarLink}>회원가입</Link>
            <Link to="/Signin" css={s.topBarLink}>로그인</Link>
          </>
        )}
        <Link to="/notice" css={s.topBarLink}>
          공지사항
        </Link>
      </div>

      {/* ── 2줄: 메인바 ── */}
      <div css={s.mainBar}>
        <Link to="/" css={s.logo}>
          XMPY
        </Link>

        <nav css={s.nav}>
          {STATIC_MENU_ITEMS.map((menu) => (
            <Link key={menu.id} to={menu.path} css={s.navLink}>
              {menu.name}
            </Link>
          ))}

          {categories.map((category) => (
            <CategoryDropdown
              key={category.productCategoryId}
              category={category}
            />
          ))}
        </nav>

        <div css={s.iconSection}>
          <Link to="/cart" css={s.iconButton}>
            <AiOutlineShopping />
          </Link>
          <Link to="/Mypage" css={s.iconButton}>
            <AiOutlineUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
