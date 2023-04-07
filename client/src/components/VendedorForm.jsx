import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const VendedorForm = ({ valoresIniciales, agregarVendedor, textoBoton }) => {
  return (
    <Formik
            enableReinitialize={true}
            initialValues={valoresIniciales}
            validationSchema={Yup.object({
                nombre: Yup.string()
                    .min(3, 'Debe tener al menos 4 caracteres')
                    .required('Requerido'),
                apellido: Yup.string()
                    .min(3, 'Debe tener al menos 4 caracteres')
                    .required('Requerido'),
                telefono: Yup.string()
                    .min(8, 'Debe haber al menos 8 numeros')
                    .required('Requerido'),
            })}
            onSubmit={agregarVendedor}
        >
            <Form className='fs-3'>
                <fieldset className='border border-dark-subtle py-4 px-2 mb-3'>
                    <legend className='fs-4 text-start'>Información General</legend>
                    <div className='mb-3  text-start text-danger'>
                        <label className="form-label text-black" htmlFor="nombre">NOMBRE:</label>
                        <Field className="form-control fs-4" name="nombre" type="text" />
                        <ErrorMessage name="nombre" />
                    </div>
                    <div className='mb-3 text-start text-danger'>
                        <label className="form-label text-black" htmlFor="apellido">APELLIDO:</label>
                        <Field className="form-control fs-4" name="apellido" type="text" />
                        <ErrorMessage name="apellido" />
                    </div>
                    <div className='mb-3 text-start text-danger'>
                        <label className="form-label text-black" htmlFor="telefono">TELEFONO:</label>
                        <Field className="form-control fs-4" name="telefono" type='text' />
                        <ErrorMessage name="telefono" />
                    </div>
                </fieldset>
                <button className="btn btn-success fs-3" type="submit">{textoBoton}</button>
            </Form>
        </Formik>
  )
}

export default VendedorForm
