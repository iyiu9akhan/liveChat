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

import { Routes, Route } from "react-router";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
// import PathProtector from "./components/Layout/PathProtector";
import store from "./Store";
import { Provider } from "react-redux";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route
          path="/home"
          element={
            // <PathProtector>
            <Home />
            //  </PathProtector>
          }
        />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Provider>
  );
}

export default App;
