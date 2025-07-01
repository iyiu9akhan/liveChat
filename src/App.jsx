// import { createBrowserRouter, RouterProvider } from "react-router";
// import Registration from "./pages/Registration";
// import Login from "./pages/Login";

// const router = createBrowserRouter([
//   {
//     path: "/registration",
//     element: <Registration />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import { HashRouter, Routes, Route, BrowserRouter } from "react-router";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import PathProtector from "./components/Layout/PathProtector";

function App() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route
        path="/"
        element={
          <PathProtector>
            <Home />
          </PathProtector>
        }
      />
    </Routes>
  );
}

export default App;
