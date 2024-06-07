import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Homepage/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login/index.jsx";
import RegistrationForm from "./pages/Register/index.jsx";
import AdminLogin from "./pages/AdminLogin/index.jsx";
import Products from "./pages/Products/index.jsx";
import Company from "./pages/Employees/index.jsx";



import About from "./pages/About/index.jsx";
import EmployeeInfo from "./pages/Employees/index.jsx";
import Sales from "./pages/App.jsx";
import { AuthProvider } from "./context/authContext.jsx";





const urls = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/employees",
    element: <Company />,
  },
  {
    path: "/products",
    element: <Products />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about/employees",
    element: <EmployeeInfo />,
  },
 
  {
    path: "/sales",
    element: <Sales />,
  },
];
const paths = createBrowserRouter(urls);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={paths} />
    </AuthProvider>
  </React.StrictMode>
);
