import Home from "../pages/Home/Home";

export const MENU_ITEMS = [
  {
    id: 1,
    name: "페이지1",
    path: "/page1",
    element: <>페이지1</>,
  },
  {
    id: 2,
    name: "페이지2",
    path: "/page2",
    element: <>페이지2</>,
  },
  {
    id: 3,
    name: "페이지3",
    path: "/page3",
    element: <>페이지3</>,
  },
];

// 전체공개 라우트
export const PUBLIC_ROUTES = [
  ...MENU_ITEMS,
  {
    id: "home",
    path: "/",
    element: <Home />,
  }
];



