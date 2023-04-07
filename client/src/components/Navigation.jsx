import axios from 'axios';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

const Navigation = () => {
    //const navigate = useNavigate();
    const { logeado, setLogeado } = useContext(LoginContext);


    const handleClick = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/usuario/logout`, {withCredentials: true});
                console.log(res.data);
                setLogeado(!logeado);
                // navigate('/Login');
                window.location.reload(); // Recarga la página después de hacer logout
            } catch (error) {
                console.log(error);
            }
    }

    return (
        <nav>
            <ul className='lista-enlaces d-flex gap-5'>
                <li><Link className='text-white text-decoration-none' to='/nosotros'>Nosotros</Link></li>
                <li><Link className='text-white text-decoration-none' to='/propiedades'>Propiedades</Link></li>
                <li><Link className='text-white text-decoration-none' to='/contactar'>Contacto</Link></li>
                {
                    logeado && <li><button className='btn btn-info fs-4 text-dark text-decoration-none' onClick={handleClick}>Cerrar Sesión</button></li>
                }
            </ul>
        </nav>
    )
}

export default Navigation
