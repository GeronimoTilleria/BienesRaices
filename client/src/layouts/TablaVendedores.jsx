import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import EliminarVendedor from '../components/EliminarVendedor';
import { LoginContext } from '../context/LoginContext';

const TablaVendedores = () => {
    const navigate = useNavigate();
    const { setLogeado } = useContext(LoginContext);

    const [actualizar, setActualizar] = useState(false);

    const [vendedores, setVendedores] = useState([]);

    useEffect(() => {
        const obtenerVendedores = async () => {
            try {
                const rpta = await axios.get(`${process.env.REACT_APP_API_URL}/vendedores`, { withCredentials: true })
                setLogeado(true);
                setVendedores(rpta.data);
            } catch (error) {
                setLogeado(false);
                navigate('/Login');
            }
        }
        obtenerVendedores();
    }, [actualizar])


    return (
        <div>
            <p className='h2 text-center mb-3'>Vendedores/as</p>
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        vendedores?.map((vendedor, index) =>
                            <tr key={index}>
                                <th>{vendedor.nombre}</th>
                                <td>{vendedor.apellido}</td>
                                <td>{vendedor.telefono}</td>
                                <td className='d-flex gap-4'>
                                    <Link to='/Admin/ActualizarVendedor' className="btn btn-warning fs-3">Actualizar</Link>
                                    <EliminarVendedor 
                                        vendedorID={vendedor._id}
                                        actualizar={actualizar}
                                        setActualizar={setActualizar}
                                    />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaVendedores
