import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import EliminarPropiedad from '../components/EliminarPropiedad';
import { LoginContext } from '../context/LoginContext';

const TablaPropiedades = () => {
    const navigate = useNavigate()
    const { logeado, setLogeado } = useContext(LoginContext);

    const [actualizar, setActualizar] = useState(false);

    const [propiedades, setPropiedades] = useState([]);

    useEffect(() => {
        const obtenerPropiedades = async () => {
            try {
                const rpta = await axios.get(`${process.env.REACT_APP_API_URL}/propiedades`, { withCredentials: true });
                setLogeado(true);
                setPropiedades(rpta.data);
            } catch (error) {
                setLogeado(false);
                navigate('/Login');
            }

        }
        obtenerPropiedades();
    }, [actualizar])

    const imagenURL = (propiedad) => {
        console.log(propiedad);
        var img;
        const reader = new FileReader();
        reader.onload = () => {
            img = reader.result;
        };
        reader.readAsDataURL(propiedad.imagen);
        return img;
    };

    return (
        <div className='mb-5'>
            <p className='h2 text-center mb-3'>Propiedades</p>
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        propiedades?.map((propiedad, index) =>
                            <tr key={index}>
                                <th>{propiedad.titulo}</th>
                                <td>{propiedad.precio}</td>
                                <td>
                                    <img src={"http://localhost:8000/files/" + propiedad.imagen} alt="propiedad image" height={70} width={90} />
                                </td>
                                <td>
                                    <Link to={`/Admin/ActualizarProp/${propiedad._id}`} className="btn btn-warning fs-3">Actualizar</Link>
                                    <EliminarPropiedad
                                        propiedad={propiedad}
                                        actualizar={actualizar}
                                        setActualizar={setActualizar}
                                    />
                                </td>
                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    )
}

export default TablaPropiedades
