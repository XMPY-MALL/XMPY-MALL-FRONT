import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";

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
    path: "/category/:categoryDetailId", // 서브메뉴 클릭시 pathVariable을 받아서 하나의 컴포넌트에서 get요청
    element: <>서브메뉴 화면</>,
  },
  { id: "home", path: "/", element: <Home /> },
  { id: "signin", path: "/signin", element: <Signin /> },
];
