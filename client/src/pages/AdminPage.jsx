import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FooterAdmin from '../layouts/FooterAdmin'
import HeaderAdmin from '../layouts/HeaderAdmin'
import TablaPropiedades from '../layouts/TablaPropiedades'
import TablaVendedores from '../layouts/TablaVendedores'
import { LoginContext } from '../context/LoginContext'
import Header from '../layouts/Header'

const AdminPage = () => {
    const {logeado} = useContext(LoginContext);
    console.log(logeado);
    return (
        <>
            <Header />
            <div className='contenedor my-5'>
                <h2 className='text-center mb-5 fs-1'>Administrador de Bienes Raíces</h2>
                <div className='d-flex gap-4 mb-4'>
                    <Link to='/Admin/AgregarPropiedad' className="btn btn-success fs-3 text-decoration-none">Agregar Propiedad</Link>
                    <Link to='/Admin/AgregarVendedor' className="btn btn-warning fs-3 text-decoration-none">Agregar Vendedor/a</Link>
                </div>
                <TablaPropiedades />
                <TablaVendedores />
            </div>
            <FooterAdmin />
        </>
    )
}

export default AdminPage
