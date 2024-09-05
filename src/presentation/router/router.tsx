import { createBrowserRouter, Navigate } from "react-router-dom";
import { Clients, Home, Inventory, InventoryProduct, Product, Sale } from "../pages";
import DashboardLayout from "../template/DashboardLayout";

export const menuRouter = [
    {
        to: '/home',
        title: 'home',
        component: <Home/>
    },
    {
        to: '/client',
        title: 'client',
        component: <Clients/>
    },
    {
        to: '/inventory',
        title: 'inventory',
        component: <Inventory/>
    },  
    {
        to: '/invetori-product',
        title: 'invetori-product',
        component: <InventoryProduct/>
    },
    {
        to: '/product',
        title: 'product',
        component: <Product/>
    }, 
    {
        to: '/sale',
        title: 'sale',
        component: <Sale/>
    },   
];

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            ...menuRouter.map(route => ({
                path: route.to,
                element: route.component
            })),
            {
                path: '',
                element: <Navigate to={ menuRouter[0].to}/>
              }
        ]
    }
]);