import axios from 'axios';
import React, { useEffect, useState } from 'react'

import PropiedadCard from '../components/PropiedadCard'

const ListaPropiedadHome = () => {

    const [verTodo, setVerTodo] = useState(false);

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
            <div className='my-5 d-grid gap-4'>
                {
                    propiedades.length >= 3 ?
                        verTodo ?
                            propiedades.map((propiedad, index) => <PropiedadCard key={index} propiedad={propiedad} />) :
                            <>
                                <PropiedadCard propiedad={propiedades[0]} />
                                <PropiedadCard propiedad={propiedades[1]} />
                                <PropiedadCard propiedad={propiedades[2]} />
                            </> :
                        propiedades.map((propiedad, index) => <PropiedadCard key={index} propiedad={propiedad} />)
                }
            </div>
            <div className='d-flex justify-content-end'>
                {
                    propiedades.length > 3 ?
                        verTodo ?
                            <button className="btn btn-warning fs-3 mb-5" onClick={() => setVerTodo(!verTodo)}>Ver Menos</button>
                            :
                            <button className="btn btn-warning fs-3 mb-5" onClick={() => setVerTodo(!verTodo)}>Ver todos</button>
                        :
                        ''
                }
            </div>
        </>
    )
}

export default ListaPropiedadHome
