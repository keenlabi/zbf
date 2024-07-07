import AuthRoutes from "./AuthRoutes";
import { IAppRouterType } from "./routes.types";
import Home from "src/modules/Home/Home";
import ProductsRoutes from "./ProductRoutes";
import ProtectedRoute from "./ProtectedRoute";
import CartRoutes from "./CartRoutes";

const AppRoutes: IAppRouterType[] = [
  ...AuthRoutes,
  {
    path: "/",
    title: "Home",
    element: <ProtectedRoute children={<Home />} />,
    children: [
      ...ProductsRoutes,
      ...CartRoutes
      // {
      //   path: "checkout",
      //   title: "Checkout",
      //   element: <Checkout />,
      // },
      // {
      //   path: "orders",
      //   title: "Orders",
      //   element: <Orders />,
      // },
      // {
      //   path: "search",
      //   title: "Search",
      //   element: <Search />,
      // },
      // {
      //   path: "order-detail/:orderId",
      //   title: "Order detail",
      //   element: <OrderDetail />,
      // },
    ],
  },
];

export default AppRoutes;
