import { createBrowserRouter, RouterProvider } from "react-router";
import Registration from "./pages/Registration";

const router = createBrowserRouter(
  [
    {
      path: "/registration",
      element: <Registration />,
    },
  ],
  { base: "/liveChat/" }
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
