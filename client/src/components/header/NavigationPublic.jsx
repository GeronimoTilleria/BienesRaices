
import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <nav>
            <ul className='lista-enlaces d-flex gap-5'>
                <li><Link className='text-white text-decoration-none' to='/nosotros'>Nosotros</Link></li>
                <li><Link className='text-white text-decoration-none' to='/propiedades'>Propiedades</Link></li>
                <li><Link className='text-white text-decoration-none' to='/contactar'>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
