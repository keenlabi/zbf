import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "src/shared/components/AppLayout";
import Error from "src/modules/Error/Error";
import AppRoutes from "./routes/AppRoutes";
import "src/shared/utility/stringPrototype.ts"

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: AppRoutes.map( appRoute => ({
        path: appRoute.path,
        element: appRoute.element,
      }))
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
