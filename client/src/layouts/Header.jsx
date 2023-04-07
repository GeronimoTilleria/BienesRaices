import React from 'react'
import Logo from '../components/header/Logo'
import Navigation from '../components/header/Navigation'

const Header = () => {
    return (
        <header className='bg-header'>
            <div className='contenedor d-flex justify-content-between align-items-center py-4'>
                <Logo />
                <Navigation />
            </div>

        </header>
    )
}

export default Header
