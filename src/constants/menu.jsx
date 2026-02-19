import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";





export const MENU_ITEMS_LEFT = [
  { id: 1, name: "BEST", path: "/page1", element: <>페이지1</> },
  { id: 2, name: "아우터", path: "/page2", element: <>페이지2</> },
];

export const MENU_ITEMS_RIGHT = [
  { id: 3, name: "상의", path: "/page3", element: <>페이지3</> },
  { id: 4, name: "하의", path: "/page4", element: <>페이지4</> },
];


// 전체공개 라우트
export const PUBLIC_ROUTES = [
  ...MENU_ITEMS_LEFT,
  ...MENU_ITEMS_RIGHT,
  {
    id: "home",
    path: "/",
    element: <Home />,
  },
  {
    id: "signin",
    path: "/signin",
    element: <Signin />
  }
];



