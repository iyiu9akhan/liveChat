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

function App() {
  return (
   <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element= {<Login/>}/>
    </Routes>
  );
}

export default App;
