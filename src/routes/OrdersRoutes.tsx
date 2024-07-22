import Orders from "src/modules/Orders/Orders";
import { RouteObject } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const OrderRoutes:RouteObject[] = [
    {
        path: "/orders",
        element: <ProtectedRoute children={<Orders /> } authRequired={true} allowedRoles={["customer"]} />
    },
];

export default OrderRoutes;