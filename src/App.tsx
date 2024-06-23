import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "src/shared/components/AppLayout";
import Error from "src/modules/Error/Error";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: AppRoutes.map((appRoute) => ({
        path: appRoute.path,
        element: appRoute.element,
        children: appRoute.children?.map((childRoute) => ({
          path: childRoute.path,
          element: childRoute.element,
        })),
      })),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
