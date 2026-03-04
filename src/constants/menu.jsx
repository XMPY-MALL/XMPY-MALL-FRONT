import CartPage from "../pages/CartPage/CartPage";
import Home from "../pages/Home/Home";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
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
  { id: "home", path: "/", element: <Home /> },
  { id: "cart", path: "/cart", element: <CartPage /> },
  { id: "payment", path: "/payment", element: <PaymentPage /> },
];
