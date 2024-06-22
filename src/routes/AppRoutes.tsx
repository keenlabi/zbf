import AuthRoutes from "./AuthRoutes";
import { IAppRouterType } from "./routes.types";
import Home from "src/modules/Home/Home";

const AppRoutes:IAppRouterType[] = [
    ...AuthRoutes,
    {
        path: "/",
        title: "Home",
        element: <Home />
    },
];

export default AppRoutes;