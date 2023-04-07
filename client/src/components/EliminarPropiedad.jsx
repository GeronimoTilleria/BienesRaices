import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EliminarPropiedad = ({ propiedad, actualizar, setActualizar }) => {
    const navigate = useNavigate();

    const eliminarPropiedad = async () => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/propiedades/${propiedad._id}`, { withCredentials: true });
            setActualizar(!actualizar)
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha eliminado correctamente!!!',
                    // text: `It has been added to ${res.data.name} perfectly!`,
                });
            }
        } catch (error) {
            if (error.response.status == 401) {
                navigate('/Login');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo no ha ido bien!!!',
                    // text: `Error: ${error?.response?.data?.message || error.message}`,
                })
            }
        }
    }

    return (
        <button onClick={eliminarPropiedad} className="btn btn-danger fs-3 ms-5">Eliminar</button>
    )
}

export default EliminarPropiedad
