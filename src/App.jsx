import { createBrowserRouter, RouterProvider } from "react-router";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },{
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// import { HashRouter, Routes, Route, BrowserRouter } from "react-router";
// import Registration from "./pages/Registration";

// function App() {
//   return (
//     <BrowserRouter basename={import.meta.env.BASE_URL}>
//       <Routes>
//         <Route path="/registration" element={<Registration />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
