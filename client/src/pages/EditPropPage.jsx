import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PropiedadForm from '../components/PropiedadForm';
import FooterAdmin from '../layouts/FooterAdmin'
import Header from '../layouts/Header';

const EditPropPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const initialValue = {
        titulo: '',
        precio: '',
        imagen: '',
        descripcion: '',
        habitaciones: '',
        baños: '',
        estacionamientos: '',
        vendedor: ''
    }

    const [propiedad, setPropiedad] = useState(initialValue);

    useEffect(() => {
        const getPropiedad = async () => {
            const rpta = await axios.get(`${process.env.REACT_APP_API_URL}/propiedades/${id}`, {withCredentials: true});
            setPropiedad(rpta.data);
        }
        getPropiedad();
    }, [id]);

    const propiedadEdit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/propiedades/${id}`, values, {withCredentials: true},
            {
                headers: {
                  'content-type': 'multipart/form-data'
                }
            }
            );
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha actualizado correctamente!!!',
                    text: `${res.data.nombre} updated successfully!`,
                });
                navigate('/Admin');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Algo no ha ido bien!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <>
            <Header />
            <div className='contenedor my-5'>
                <h2 className='text-center mb-5 fs-1'>Modificar</h2>
                <PropiedadForm
                    valoresIniciales={propiedad}
                    agregarPropiedad={propiedadEdit}
                    botonTexto='Editar Propiedad'
                />
            </div>
            <FooterAdmin />
        </>
    )
}

export default EditPropPage
