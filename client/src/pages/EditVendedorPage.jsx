import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import VendedorForm from '../components/VendedorForm'
import FooterAdmin from '../layouts/FooterAdmin'
import HeaderAdmin from '../layouts/HeaderAdmin'

const EditVendedorPage = () => {

    const { id } = useParams();

    const [vendedor, setVendedor] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    });

    useEffect(() => {
        const getVendedor = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/vendedores/${id}`, {withCredentials: true});
            setVendedor(res.data);
        };
        getVendedor();
    }, []);

    const agregarVendedor = async (values, actions) => {
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/vendedores`, values, {withCredentials: true});
        }catch(error) {
            console.log(error);
        }
    };

    return (
        <>
            <HeaderAdmin />
            <div className='contenedor my-5'>
                <h2 className='text-center mb-5 fs-1'>Agregar</h2>
                <Link to='/Admin' className="btn btn-warning fs-3 mb-3">Volver</Link>
                <VendedorForm 
                    valoresIniciales={vendedor}
                    agregarVendedor={agregarVendedor}
                    textoBoton='Editar Vendedor'
                />
            </div>
            <FooterAdmin />
        </>
    )
}

export default EditVendedorPage
