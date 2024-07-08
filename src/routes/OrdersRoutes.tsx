import Orders from "src/modules/Orders/Orders";
import { IAppRouterType } from "./routes.types";

const OrderRoutes:IAppRouterType[] = [
    {
        path: "/orders",
        title: "Orders",
        element: <Orders />
    },
];

export default OrderRoutes;