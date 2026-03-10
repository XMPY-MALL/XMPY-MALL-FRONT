// /** @jsxImportSource @emotion/react */
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthStore } from "../../stores/authStore";
// import * as s from "./styles";
// import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
// import { useCategories } from "../../constants/useCategories";
// import { STATIC_MENU_ITEMS } from "../../constants/menu";
// import CategoryDropdown from "./components/CategoryDropDown/CategoryDropDown";
// import { jwtDecode } from "jwt-decode";

// export default function Header() {
//   const navigate = useNavigate();
//   const categories = useCategories();
//   const { isAuthenticated, logout } = useAuthStore();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const accessToken = localStorage.getItem("accessToken");
//   let isOwner = false;

//   // try {
//   //   if (accessToken) {
//   //     const decoded = jwtDecode(accessToken);
//   //     isOwner = decoded?.role === 2;
//   //   }
//   // } catch (error) {
//   //   isOwner = false;
//   // }

//   try {
//     if (accessToken) {
//         const decoded = jwtDecode(accessToken);
//         isOwner = Number(decoded?.role) === 2;
//         console.log("decoded:", decoded);
//         console.log("decoded.role:", decoded?.role, typeof decoded?.role);
//         console.log("isOwner:", isOwner);
//       }
//     } catch (error) {
//       console.error(error);
//       isOwner = false;
//     }
//   return (
//     <header css={s.container}>
//       {/* ── 1줄: 서브바 ── */}
//       <div css={s.topBar}>

//       {isOwner && (
//           <>
//             <Link to="/product/add" css={s.topBarLink}>
//               상품추가
//             </Link>
//             <Link to="/stock/manage" css={s.topBarLink}>
//               재고관리
//             </Link>
//           </>
//         )}

//         {isAuthenticated ? (
//           <button css={s.topBarLink} onClick={handleLogout}>
//             로그아웃
//           </button>
//         ) : (
//           <>
//             <Link to="/Signup" css={s.topBarLink}>
//               회원가입
//             </Link>
//             <Link to="/Signin" css={s.topBarLink}>
//               로그인
//             </Link>
//           </>
//         )}
//         <Link to="/notice" css={s.topBarLink}>
//           공지사항
//         </Link>
//       </div>

//       {/* ── 2줄: 메인바 ── */}
//       <div css={s.mainBar}>
//         <Link to="/" css={s.logo}>
//           XMPY
//         </Link>

//         <nav css={s.nav}>
//           {STATIC_MENU_ITEMS.map((menu) => (
//             <Link key={menu.id} to={menu.path} css={s.navLink}>
//               {menu.name}
//             </Link>
//           ))}

//           {categories.map((category) => (
//             <CategoryDropdown
//               key={category.productCategoryId}
//               category={category}
//             />
//           ))}
//         </nav>

//         <div css={s.iconSection}>
//           <Link to="/cart" css={s.iconButton}>
//             <AiOutlineShopping />
//           </Link>
//           <Link to="/Mypage" css={s.iconButton}>
//             <AiOutlineUser />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import * as s from "./styles";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { useCategories } from "../../constants/useCategories";
import { STATIC_MENU_ITEMS } from "../../constants/menu";
import CategoryDropdown from "./components/CategoryDropDown/CategoryDropDown";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const categories = useCategories();
  const { isAuthenticated, logout } = useAuthStore();

  const [isOwner, setIsOwner] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken);
        const owner = Number(decoded?.role) === 2;
        setIsOwner(owner);

        console.log("decoded:", decoded);
        console.log("isOwner:", owner);
      } catch (error) {
        console.error(error);
        setIsOwner(false);
      }
    }
  }, [isAuthenticated]);

  return (
    <header css={s.container}>
      <div css={s.topBar}>
        {isOwner && (
          <>
            <Link to="/product/add" css={s.topBarLink}>
              상품추가
            </Link>
            <Link to="/stock/manage" css={s.topBarLink}>
              재고관리
            </Link>
          </>
        )}

        {isAuthenticated ? (
          <button css={s.topBarLink} onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          <>
            <Link to="/Signup" css={s.topBarLink}>
              회원가입
            </Link>
            <Link to="/Signin" css={s.topBarLink}>
              로그인
            </Link>
          </>
        )}

        <Link to="/notice" css={s.topBarLink}>
          공지사항
        </Link>
      </div>

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