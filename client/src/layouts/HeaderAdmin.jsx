import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
    return (
        <header className='bg-header'>
            <div className='contenedor d-flex justify-content-between align-items-center py-4'>
                <Link className='text-white text-decoration-none' to='/'><h1>BIENES<b>RAICES</b></h1></Link>
                <nav>
                    <ul className='lista-enlaces d-flex gap-5'>
                        <li><Link className='text-white text-decoration-none' to='/nosotros'>Nosotros</Link></li>
                        <li><Link className='text-white text-decoration-none' to='/propiedades'>Propiedades</Link></li>
                        <li><Link className='text-white text-decoration-none' to='/contactar'>Contacto</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default HeaderAdmin
