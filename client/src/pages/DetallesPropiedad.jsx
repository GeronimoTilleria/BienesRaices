import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterAdmin from '../layouts/FooterAdmin'
import Header from '../layouts/Header'
import AgenteInfor from '../layouts/AgenteInfor'

const DetallesPropiedad = () => {
    const { id } = useParams();

    const [propiedad, setPropiedad] = useState({
        titulo: '',
        precio: '',
        imagen: '',
        descripcion: '',
        habitaciones: '',
        baños: '',
        estacionamientos: '',
        vendedor: ''
    });

    useEffect(() => {
        const getPropiedad = async () => {
            const rpta = await axios.get(`${process.env.REACT_APP_API_URL}/propiedades_p/${id}`)
            setPropiedad(rpta.data);
        };
        getPropiedad();
    }, [id]);
    console.log(propiedad);
    return (
        <>
            <Header />
            <div className='contenedor my-5'>
                <h2 className='text-center mb-5 fs-1'>{propiedad.titulo}</h2>
                <div className='mb-4'>
                    <img className='w-100 h-css-detalle object-fit-cover' src={"http://localhost:8000/files/" + propiedad.imagen} />
                </div>
                <span className='text-success fs-1'>${propiedad.precio}</span>
                <div className='d-flex gap-5 mt-4'>
                    <div className='d-flex align-items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bath" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
                            <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
                            <path d="M4 21l1 -1.5" />
                            <path d="M20 21l-1 -1.5" />
                        </svg>
                        <span>{propiedad.baños}</span>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="7" cy="17" r="2" />
                            <circle cx="17" cy="17" r="2" />
                            <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                        </svg>
                        <span>{propiedad.estacionamientos}</span>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bed" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
                            <circle cx="7" cy="10" r="1" />
                        </svg>
                        <span>{propiedad.habitaciones}</span>
                    </div>
                </div>
                <p className='mt-3 text-break'>{propiedad.descripcion}</p>
                <AgenteInfor propiedad={propiedad} />
            </div>
            <FooterAdmin />
        </>
    )
}

export default DetallesPropiedad
