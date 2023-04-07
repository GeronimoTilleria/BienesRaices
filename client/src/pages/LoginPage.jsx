import React from 'react'
import UserForm from '../components/UserForm'
import FooterAdmin from '../layouts/FooterAdmin'
import Header from '../layouts/Header'


const LoginPage = () => {
    return (
        <div className='login-container'>
            <Header />
            <div className='main-login-container contenedor d-flex flex-column justify-content-center'>
                <h2 className='text-center mb-5 fs-1'>Iniciar Sesión</h2>
                <UserForm />
            </div>

            <FooterAdmin />
        </div>
    )
}

export default LoginPage
