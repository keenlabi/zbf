import ProductDetail from "src/modules/Home/components/ProductDetail";
import AuthRoutes from "./AuthRoutes";
import { IAppRouterType } from "./routes.types";
import Home from "src/modules/Home/Home";
import Product from "src/modules/Home/components/Products";

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
        title: "Product details",
        element: <ProductDetail />,
      },
    ],
  },
];

export default AppRoutes;
