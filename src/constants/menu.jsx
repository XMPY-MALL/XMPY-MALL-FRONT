import Home from "../pages/Home/Home";
<<<<<<< HEAD
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
=======
import Mypage from "../pages/Mypage/Mypage";
>>>>>>> 5234de0 (비밀번호/주소/전화번호 수정페이지 완료)
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import SubMenuPage from "../pages/SubMenuPage/SubMenuPage";

// 상단 header navbar 일반메뉴들

export const STATIC_MENU_ITEMS = [
  {
    id: 1,
    name: "BEST",
    path: "/best",
    element: <>베스트상품들</>,
  },
];

export const PUBLIC_ROUTES = [
  ...STATIC_MENU_ITEMS,
  {
    id: "category",
    path: "/category/:categoryDetailId",
    element: <SubMenuPage />,
  },
  {
    id: "product",
    path: "/product/:productId",
    element: <ProductDetailPage />,
  },
  {
    id: "signin",
    path: "/signin",
    element: <Signin />,
  },
  {
    id: "signup",
    path: "/signup",
    element: <Signup />,
  },
<<<<<<< HEAD
  { id: "home", path: "/", element: <Home /> },
=======
  {
    id: "mypage",
    path: "/mypage",
    element: <Mypage/>
  }
>>>>>>> 5234de0 (비밀번호/주소/전화번호 수정페이지 완료)
];
