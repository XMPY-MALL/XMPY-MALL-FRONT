import CartPage from "../pages/CartPage/CartPage";
import Home from "../pages/Home/Home";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import Mypage from "../pages/Mypage/Mypage";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import SubMenuPage from "../pages/SubMenuPage/SubMenuPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import Best from "../pages/Best/Best";

// 상단 header navbar 일반메뉴들

export const STATIC_MENU_ITEMS = [
  {
    id: 1,
    name: "BEST",
    path: "/best",
    element: <Best />,
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
  { id: "home", path: "/", element: <Home /> },
];

export const USER_ROUTES = [
  {
    id: "mypage",
    path: "/mypage",
    element: <Mypage />,
  },
  { id: "cart", path: "/cart", element: <CartPage /> },
  { id: "payment", path: "/payment", element: <PaymentPage /> },
];

export const ADMIN_ROUTES = [
  {
    id: "addProduct",
    path: "/product/add",
    element: <AddProduct />,
  },
];
