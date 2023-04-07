import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AdminPage from "../pages/AdminPage";
import AgregarPropiedad from "../pages/AgregarPropiedad";
import AgregarVendedor from "../pages/AgregarVendedor";
import ContactarPage from "../pages/ContactarPage";
import DetallesPropiedad from "../pages/DetallesPropiedad";
import EditPropPage from "../pages/EditPropPage";
import EditVendedorPage from "../pages/EditVendedorPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Nosotros from "../pages/Nosotros";
import NotFound from "../pages/NotFound";
import Propiedades from "../pages/Propiedades";


export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:'/Login',
                element: <LoginPage />
            },
            {
                path:'/propiedades',
                element: <Propiedades />
            },
            {
                path:'/nosotros',
                element: <Nosotros />
            },
            {
                path:'/contactar',
                element: <ContactarPage />
            },
            {
                path:'/Detalles/:id',
                element: <DetallesPropiedad />
            },
            {
                path:'/Admin',
                element: <AdminPage />
            },
            {
                path:'/Admin/AgregarPropiedad',
                element: <AgregarPropiedad />
            },
            {
                path:'/Admin/AgregarVendedor',
                element: <AgregarVendedor />
            },
            {
                path:'/Admin/ActualizarProp/:id',
                element: <EditPropPage />
            },
            {
                path:'/Admin/ActualizarVendedor',
                element: <EditVendedorPage />
            }
            // {
            //     path:'/edit/:id',
            //     element: <PetEdit />
            // },
        ]
    }
]);