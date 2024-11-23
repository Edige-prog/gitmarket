import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { domAnimation, LazyMotion } from 'framer-motion';
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.tsx';
import Home from './components/home/Home.tsx';
import About from './components/about/About.tsx';
import Login from './components/auth/login/Login.tsx';
import Register from './components/auth/register/Register.tsx';
import Main from './components/main/Main.tsx';
import './App.scss';
import './styles.css';
import Farmers from './components/farmers/Farmers.tsx';
import Farmer from './components/farmers/Farmer.tsx';
import { FarmerContextProvider } from './components/farmers/FarmerContext.tsx';
import Products from './components/products/Products.tsx';
import Product from './components/products/Product.tsx';
import Orders from './components/orders/Orders.tsx';
import Order from './components/orders/Order.tsx';
import MyProducts from './components/dashboard/myproducts/MyProducts.tsx';
import DashboardLayout from './components/dashboard/DashboardLayout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "/farmers",
            children: [
              {
                path: "",
                element: <Farmers/>,
              },
              {
                path: ":farmerId",
                element: <FarmerContextProvider><Farmer/></FarmerContextProvider>
              }
            ]
          },
          {
            path: "/products",
            children: [
              {
                path: "",
                element: <Products/>,
              },
              {
                path: ":productId",
                element: <Product/>
              }
            ]
          },
          {
            path: "/orders",
            children: [
              {
                path: "",
                element: <Orders/>
              },
              {
                path: ":orderId",
                element: <Order/>
              }
            ]
          },
          {
            path: "/dashboard",
            element: <DashboardLayout/>,
            children: [
              {
                path: "myproducts",
                element: <MyProducts/>,
              }
            ]
          },
          {
            path: "/about",
            element: <About/>
          },
          {
            path: "/settings",
            element: <About/>
          },
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <LazyMotion features={domAnimation}>
    <RouterProvider router={router} />
  </LazyMotion>
)
