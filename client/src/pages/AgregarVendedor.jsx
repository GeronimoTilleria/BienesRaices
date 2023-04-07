import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import VendedorForm from '../components/VendedorForm'
import FooterAdmin from '../layouts/FooterAdmin'
import Header from '../layouts/Header'

const AgregarVendedor = () => {

    const navigate = useNavigate();

    const valoresIniciales = {
        nombre: '',
        apellido: '',
        telefono: ''
    }

    const agregarVendedor = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/vendedores`, values, {withCredentials: true});
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha agregado correctamente!!!',
                    text: `It has been added to ${res.data.name} perfectly!`,
                });

                actions.resetForm(valoresIniciales);
                navigate('/Admin');
            }
        } catch (error) {
            if (error.response.status == 401) {
                navigate('/Login');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo no ha ido bien!!!',
                    text: `Error: ${error?.response?.data?.message || error.message}`,
                })
            }

        }
    }

    return (
        <>
            <Header />
            <div className='contenedor my-5'>
                <h2 className='text-center mb-5 fs-1'>Agregar</h2>
                <Link to='/Admin' className="btn btn-warning fs-3 mb-3">Volver</Link>
                <VendedorForm
                    valoresIniciales={valoresIniciales}
                    agregarVendedor={agregarVendedor}
                    textoBoton='Crear Vendedor'
                />
            </div>
            <FooterAdmin />
        </>
    )
}

export default AgregarVendedor
