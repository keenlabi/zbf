import Orders from "src/modules/Orders/Orders";
import { RouteObject } from "react-router-dom";

const OrderRoutes:RouteObject[] = [
    {
        path: "/orders",
        element: <Orders />
    },
];

export default OrderRoutes;