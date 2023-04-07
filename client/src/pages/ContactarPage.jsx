import React from 'react'
import ContactarForm from '../components/ContactarForm'
import FooterAdmin from '../layouts/FooterAdmin'
import Header from '../layouts/Header'

const ContactarPage = () => {
    return (
        <>
            <Header />
            <div className='contenedor my-5'>
                <h2 className='text-center mb-5 fs-1'>Contacto</h2>
                <img className='w-100' src={require('../assets/images/departamento-contacto.jpg')} />
                <h2 className='text-center my-5 fs-1'>Llene el Formulario de Contacto</h2>
                <ContactarForm />
            </div>
            <FooterAdmin />
        </>
    )
}

export default ContactarPage
