import { RouteObject } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Payment from "src/modules/Payment";

const PaymentRoutes:RouteObject[] = [
    {
        path: "payment",
        element: <ProtectedRoute 
                    children={<Payment />} 
                    authRequired={true} 
                />
    },
];

export default PaymentRoutes;