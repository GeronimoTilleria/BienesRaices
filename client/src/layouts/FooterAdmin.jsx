import React from 'react'
import { Link } from 'react-router-dom'

const FooterAdmin = () => {
    return (
        <footer className='footer bg-footer'>
            <div className='contenedor py-4'>
                <nav className='mb-5'>
                    <ul className='lista-enlaces d-flex gap-5'>
                        <li><Link className='text-white text-decoration-none' to='/nosotros'>Nosotros</Link></li>
                        <li><Link className='text-white text-decoration-none' to='/propiedades'>Propiedades</Link></li>
                        <li><Link className='text-white text-decoration-none' to='/contactar'>Contacto</Link></li>
                    </ul>
                </nav>
                <p className='text-center'>Todos los derechos Reservados 2023©</p>
            </div>
        </footer>
    )
}

export default FooterAdmin
