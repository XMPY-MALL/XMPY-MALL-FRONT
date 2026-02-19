import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";





// 상단 header navbar 일반메뉴들
export const MENU_ITEMS = [
  {
    id: 1,
    name: "BEST",
    path: "/page1",
    element: <>페이지1</>,
  },
  {
    id: 2,
    name: "아우터",
    path: "/page2",
    element: <>페이지2</>,
  },
  {
    id: 3,
    name: "상의",
    path: "/page3",
    element: <>페이지3</>,
  },
  {
    id: 4,
    name: "하의",
    path: "/page3",
    element: <>페이지3</>
  }
];


// 전체공개 라우트
export const PUBLIC_ROUTES = [
  ...MENU_ITEMS,
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



