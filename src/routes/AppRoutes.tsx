import Home from "src/modules/Landing/Home";
import AuthRoutes from "./AuthRoutes";
import { IAppRouterType } from "./routes.types";

const AppRoutes:IAppRouterType[] = [
    ...AuthRoutes,
    {
        path: "/",
        title: "Home",
        element: <Home />
    },
];

export default AppRoutes;