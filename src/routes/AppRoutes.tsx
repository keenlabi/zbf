import AuthRoutes from "./AuthRoutes";
import { IAppRouterType } from "./routes.types";
import Home from "src/modules/Home/Home";
import ProductsRoutes from "./ProductRoutes";
import ProtectedRoute from "./ProtectedRoute";
import CartRoutes from "./CartRoutes";
import OrderRoutes from "./OrdersRoutes";
import PageNotFound from "src/modules/PageNotFound";

const AppRoutes: IAppRouterType[] = [
  ...AuthRoutes,
  {
    path: "/",
    title: "Home",
    element: <ProtectedRoute children={<Home />} />,
    children: [
      ...ProductsRoutes,
      ...CartRoutes,
      ...OrderRoutes
    ],
  },
  {
    path: "*",
    title: "PageNotFound",
    element:  <ProtectedRoute children={<PageNotFound />} />,
  }
];

export default AppRoutes;
