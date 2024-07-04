import Cart from "src/modules/Cart";
import { IAppRouterType } from "./routes.types";

const UserRoutes:IAppRouterType[] = [
    {
        path: "cart",
        title: "Cart",
        element: <Cart />,
    },
];

export default UserRoutes;