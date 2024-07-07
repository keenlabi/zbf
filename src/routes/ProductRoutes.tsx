import ProductDetails from "src/modules/Products/ProductDetails";
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
        element: <ProductDetails />,
    },
];

export default ProductsRoutes;