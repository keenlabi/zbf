import { IAppRouterType } from "./routes.types";
import OrderOutlet from "src/modules/Orders/OrdersOutlet";
import OrderSuccess from "src/modules/Orders/OrderSuccess";

const OrderRoutes:IAppRouterType[] = [
    {
        path: "order",
        title: "Order",
        element: <OrderOutlet />,
        children: [
            {
                path: "order",
                title: "Order",
                element: <OrderSuccess />
            }
        ]
    },
];

export default OrderRoutes;