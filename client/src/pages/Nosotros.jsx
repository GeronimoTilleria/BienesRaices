import React from 'react'
import FooterAdmin from '../layouts/FooterAdmin'
import NosotrosDetalles from '../layouts/NosotrosDetalles'
import { Link } from 'react-router-dom'
import Header from '../layouts/Header'

const Nosotros = () => {
    return (
        <>
            <Header />
            <section className='contenedor my-5'>
            
                <h2 className='text-center mb-5 fs-1'>Conoce sobre Nosotros</h2>
                <div className='d-flex gap-5'>
                    <div className='col-7'>
                        <img className="w-100 object-fit-cover" src={require('../assets/images/departamento-nosotros.jpg')} />
                    </div>
                    <div className='col-5'>
                        <p><b>25 Años de experiencia</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend,
                            dui eu scelerisque elementum, ante est mattis mi, id semper turpis augue eget
                            purus. Suspendisse sit amet lectus interdum, viverra dui non, commodo odio. Vestibulum
                            ac interdum odio, imperdiet dapibus ipsum. Donec tincidunt dui sed rutrum maximus. Aliquam
                            hendrerit sed dui a ullamcorper. Pellentesque condimentum sapien arcu, eu placerat est
                            congue faucibus. Curabitur malesuada at urna non vulputate.
                            Vivamus faucibus mi at aliquet vehicula. Suspendisse vitae sollicitudin tellus. Vestibulum
                            mollis sodales mi. Nulla at vestibulum turpis. Nullam malesuada massa ut sapien pulvinar,
                            in euismod urna condimentum. Nam at placerat ligula. Vivamus auctor urna eget leo bibendum,
                            at rutrum urna porttitor. Proin placerat cursus porttitor. Fusce eu eros sit amet mi ultricies
                            placerat. In hac habitasse platea dictumst.</p>
                    </div>
                </div>
                <NosotrosDetalles />
            </section>
            <FooterAdmin />
        </>
    )
}

export default Nosotros
