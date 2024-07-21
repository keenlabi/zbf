import Cart from "src/modules/Cart";
import ProtectedRoute from "./ProtectedRoute";
import { RouteObject } from "react-router-dom";

const CartRoutes:RouteObject[] = [
    {
        path: "cart",
        element:    <ProtectedRoute 
                        children={<Cart />} 
                        authRequired={true} 
                    />,
    },
];

export default CartRoutes;