import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropiedadCard from '../components/PropiedadCard'
import FooterAdmin from '../layouts/FooterAdmin'
import Header from '../layouts/Header'

const Propiedades = () => {
    const [propiedades, setPropiedades] = useState([]);

    useEffect(() => {
        const getProps = async () => {
            const rpta = await axios.get(`${process.env.REACT_APP_API_URL}/propiedades_p`)
            setPropiedades(rpta.data);
        };
        getProps();
    }, []);
    return (
        <>
            <Header />
            
            <h2 className='text-center my-5 fs-1'>Casas y Depas en Venta</h2>
            <div className='contenedor my-5 d-grid gap-4'>
                {
                    propiedades.map((propiedad, index) => <PropiedadCard key={index} propiedad={propiedad} />)
                }
            </div>
            <FooterAdmin />
        </>
    )
}

export default Propiedades
