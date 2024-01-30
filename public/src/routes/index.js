// import React from 'react';
// import { Suspense, lazy } from "react";
// import { Navigate, useRoutes } from "react-router-dom";
// import Home from '../Pages/Home';
// import Login from '../Pages/Login';
// import Register from '../Pages/Register';
// import Aboutus from '../Pages/Aboutus';
// import Dashboard from '../Layouts/Sidebar';
// import { DEFAULT_PATH } from "../config";
// import LoadingScreen from "../components/LoadingScreen";

// const Loadable = (Component) => (props) => {
//   return (
//     <Suspense fallback={<LoadingScreen />}>
//       <Component {...props} />
//     </Suspense>
//   );
// };

//   export default function Router() {
//   return useRoutes([
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/login",
//       element: <Login />
//     },
//     {
//       path: "/register",
//       element: <Register />
//     },
//     {
//       path: "/aboutus",
//       element: <Aboutus />
//     },
    
//     {
//       path: "/dashboard",
//       element: <Dashboard />,
//       children: [
//         { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
//         { path: "app", element: <GeneralApp /> },
        
//       ],
//     },
    
//   ]);
// };

// const GeneralApp = Loadable(
//   lazy(() => import("../Pages/GeneralApp")),
// );

