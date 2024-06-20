import Login from "src/modules/Authentication/Login/Login";
import { IAppRouterType } from "./routes.types";
import CreateAccount from "src/modules/Authentication/CreateAccount/CreateAccount";

const AuthRoutes:IAppRouterType[] = [
    {
        path: "/login",
        title: "Login",
        element: <Login />
    },
    {
        path: "/create-account",
        title: "signup",
        element: <CreateAccount />
    },
];

export default AuthRoutes;