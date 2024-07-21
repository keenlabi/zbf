import ProductDetails from "src/modules/Products/ProductDetails";
import Products from "src/modules/Products";
import { RouteObject } from "react-router-dom";

const ProductsRoutes:RouteObject[] = [
    {
        path: "products",
        element: <Products />,
    },
    {
        path: "products/:productId",
        element: <ProductDetails />,
    },
];

export default ProductsRoutes;