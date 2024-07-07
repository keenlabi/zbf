import Cart from "src/modules/Cart";
import { IAppRouterType } from "./routes.types";
import ProtectedRoute from "./ProtectedRoute";

const CartRoutes:IAppRouterType[] = [
    {
        path: "cart",
        title: "Cart",
        element:    <ProtectedRoute 
                        children={<Cart />} 
                        authRequired={true} 
                    />,
    },
];

export default CartRoutes;