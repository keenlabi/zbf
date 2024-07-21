import Login from "src/modules/Authentication/Login/Login";
import CreateAccount from "src/modules/Authentication/CreateAccount/CreateAccount";
import { RouteObject } from "react-router-dom";

const AuthRoutes:RouteObject[] = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/create-account",
        element: <CreateAccount />
    },
];

export default AuthRoutes;