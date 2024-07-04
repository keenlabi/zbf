import ProductDetail from "src/modules/Products/ProductDetail";
import { IAppRouterType } from "./routes.types";
import Products from "src/modules/Products";

const ProductsRoutes:IAppRouterType[] = [
    {
        index: true,
        path: "products",
        title: "Products",
        element: <Products />,
    },
    {
        path: "products/:productId",
        title: "Product",
        element: <ProductDetail />,
    },
];

export default ProductsRoutes;