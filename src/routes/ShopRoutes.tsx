import Shop from "src/modules/Shop/Shop";
import { RouteObject } from "react-router-dom";
import AddProduct from "src/modules/Shop/Products/AddProduct";
import ProtectedRoute from "./ProtectedRoute";
import CustomersList from "src/modules/Shop/Customers/CustomersList/CustomersList";
import ShopOrders from "src/modules/Shop/ShopOrders/ShopOrders";

const ShopRoutes:RouteObject[] = [
    {
        path: "shop",
        element: <ProtectedRoute children={<Shop />} authRequired={true} allowedRoles={["admin"]} />,
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
                element: <ShopOrders />
            },
            {
                path: "customers",
                element: <CustomersList />
            }
        ]
    },
];

export default ShopRoutes;