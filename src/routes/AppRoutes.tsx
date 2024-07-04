import AuthRoutes from "./AuthRoutes";
import { IAppRouterType } from "./routes.types";
import Home from "src/modules/Home/Home";
import ProductsRoutes from "./ProductRoutes";

const AppRoutes: IAppRouterType[] = [
  ...AuthRoutes,
  {
    path: "/",
    title: "Home",
    element: <Home />,
    children: [
      ...ProductsRoutes
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
