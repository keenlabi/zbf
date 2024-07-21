import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "src/shared/components/AppLayout";
import Error from "src/modules/Error/Error";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: AppRoutes
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
