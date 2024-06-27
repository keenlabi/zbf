import ProductDetail from "src/modules/Home/components/ProductDetail";
import AuthRoutes from "./AuthRoutes";
import { IAppRouterType } from "./routes.types";
import Home from "src/modules/Home/Home";
import Product from "src/modules/Home/components/Products";
import Cart from "src/modules/Home/components/Cart";
import Checkout from "src/modules/Home/components/Checkout";
import Payment from "src/modules/Home/components/Payment/Payment";
import Orders from "src/modules/Home/components/Orders/Orders";
import Search from "src/modules/Home/components/Search";
import OrderDetail from "src/modules/Home/components/OrderDetail";

const AppRoutes: IAppRouterType[] = [
  ...AuthRoutes,
  {
    path: "/",
    title: "Home",
    element: <Home />,
    children: [
      {
        index: true,
        path: "",
        title: "Products",
        element: <Product />,
      },
      {
        path: "product-detail/:productId",
        title: "Product detail",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        title: "Cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        title: "Checkout",
        element: <Checkout />,
      },
      {
        path: "payment",
        title: "Payment",
        element: <Payment />,
      },
      {
        path: "orders",
        title: "Orders",
        element: <Orders />,
      },
      {
        path: "search",
        title: "Search",
        element: <Search />,
      },
      {
        path: "order-detail/:orderId",
        title: "Order detail",
        element: <OrderDetail />,
      },
    ],
  },
];

export default AppRoutes;
