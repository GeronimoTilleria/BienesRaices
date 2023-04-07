import React, { useContext, useEffect, useState } from 'react'

const AgenteInfor = ({ propiedad }) => {

    return (
        <div className='bg-light px-3 py-5 rounded mt-5'>
            <p>Agente Encargado: {propiedad.vendedor.nombre} {propiedad.vendedor.apellido}</p>
            <p>Telefono: {propiedad.vendedor.telefono}</p>
        </div>
    )
}

export default AgenteInfor
