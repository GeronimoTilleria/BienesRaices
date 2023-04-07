import React from 'react'
import Logo from '../components/Logo'
import NavigationPublic from '../components/header/NavigationPublic'

const HomeHeader = () => {
    return (
        <header className="header-home">
            <div className='overlay'>
                <div className='contenido-header-home text-white'>
                    <div className="contenedor barra">
                        <div className='d-flex justify-content-between align-items-center py-5'>
                            <Logo />
                            <NavigationPublic />
                        </div>
                    </div>
                    <div className="contenedor header-texto">
                        <h2>Venta de Casas y Departamentos</h2>
                        <p>Exclusivos de lujo</p>
                    </div>
                </div>
            </div>

            <video autoPlay muted loop playsInline preload="auto" disablePictureInPicture>
                <source src={require('../assets/videos/video-header.mp4')} type="video/mp4" />
                <source src={require('../assets/videos/video-header.webm')} type="video/webm" />
                <source src={require('../assets/videos/video-header.ogv')} type="video/ogv" />
            </video>
        </header>
    )
}

export default HomeHeader
