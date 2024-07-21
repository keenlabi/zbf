import AuthRoutes from "./AuthRoutes";
import Home from "src/modules/Home/Home";
import ProductsRoutes from "./ProductRoutes";
import ProtectedRoute from "./ProtectedRoute";
import CartRoutes from "./CartRoutes";
import OrderRoutes from "./OrdersRoutes";
import PageNotFound from "src/modules/PageNotFound";
import ShopRoutes from "./ShopRoutes";
import { RouteObject } from "react-router-dom";

const AppRoutes: RouteObject[] = [
  ...AuthRoutes,
  {
    path: "/",
    element: <ProtectedRoute children={<Home />} />,
    children: [
      ...ProductsRoutes,
      ...CartRoutes,
      ...OrderRoutes,
      ...ShopRoutes
    ],
  },
  {
    path: "*",
    element:  <ProtectedRoute children={<PageNotFound />} />,
  }
];

export default AppRoutes;
