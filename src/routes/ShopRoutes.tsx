import Shop from "src/modules/Shop/Shop";
import { RouteObject } from "react-router-dom";
import AddProduct from "src/modules/Shop/Products/AddProduct";
import ProtectedRoute from "./ProtectedRoute";
import CustomersList from "src/modules/Shop/Customers/CustomersList/CustomersList";

const ShopRoutes:RouteObject[] = [
    {
        path: "shop",
        element: <ProtectedRoute children={<Shop />} authRequired={true} />,
        children: [
            {
                path: "",
                element: <AddProduct />
            },
            {
                path: "add-product",
                element: <AddProduct />
            },
            {
                path: "orders",
                element: <AddProduct />
            },
            {
                path: "customers",
                element: <CustomersList />
            }
        ]
    },
];

export default ShopRoutes;