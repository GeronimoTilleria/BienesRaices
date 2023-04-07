import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropiedadForm from '../components/PropiedadForm'
import FooterAdmin from '../layouts/FooterAdmin'
import Swal from 'sweetalert2'
import Header from '../layouts/Header'

const AgregarPropiedad = () => {

    const navigate = useNavigate();

    const valoresIniciales = {
        titulo: '',
        precio: '',
        imagen: '',
        descripcion: '',
        habitaciones: '',
        baños: '',
        estacionamientos: '',
        vendedor: ''
    }

    const agregarPropiedad = async (values, actions) => {
        
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/propiedades`, values, { withCredentials: true },  
            {
                headers: {
                  'content-type': 'multipart/form-data'
                }
            }
              );
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
            if (error.response.status === 401) {
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
                <PropiedadForm 
                    valoresIniciales={valoresIniciales} 
                    agregarPropiedad={agregarPropiedad}
                    botonTexto='Crear Propiedad'
                />
            </div>
            <FooterAdmin />
        </>
    )
}

export default AgregarPropiedad
