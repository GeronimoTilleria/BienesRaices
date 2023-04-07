import React from 'react'
import { Link } from 'react-router-dom'
import FooterAdmin from '../layouts/FooterAdmin'
import HomeHeader from '../layouts/HomeHeader'
import ListaPropiedadHome from '../layouts/ListaPropiedadHome'
import NosotrosDetalles from '../layouts/NosotrosDetalles'

const Home = () => {
    return (
        <>
            <HomeHeader />
            <div>
                <main className='contenedor'>
                    <NosotrosDetalles />
                    <h2 className='text-center my-5 fs-1'>Casas y Depas en Venta</h2>
                    <ListaPropiedadHome />
                </main>
                <div className='banner-contacto'>
                    <div className='contenido_banner-contacto d-flex flex-column align-items-center justify-content-center text-white'>
                        <h2 className='mb-5 fs-1'>Encuentra la casa de tus sueños</h2>
                        <p className='mb-5'>Llena el formulario de contacto y un asesor se pondra en contacto contigo a la brevedad</p>
                        <Link to='/Contactar' className='btn btn-warning fs-4 text-white text-decoration-none'>Contactanos</Link>
                    </div>
                </div>
                
            </div>
            <FooterAdmin />
        </>
    )
}

export default Home
