import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com'

const ContactarForm = () => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                nombre: '',
                email: '',
                telefono: '',
                mensaje: '',
            }}
            validationSchema={Yup.object({
                nombre: Yup.string()
                    .min(4, 'Debe tener al menos 4 caracteres')
                    .required('Requerido'),
                email: Yup.string()
                    .email('Email invalido')
                    .required('Requerido'),
                telefono: Yup.string()
                    .matches(/^[0-9]{7,14}$/, "El número de teléfono no es válido") // Expresión regular que valida números de teléfono entre 7 y 14 dígitos
                    .required("El número de teléfono es obligatorio"),
                mensaje: Yup.string()
                    .min(5, 'Debe tener al menos más de 5 caracteres')
                    .required('Requerido'),
            })}
            onSubmit={(values, actions) => {
                emailjs.send('service_iy6hut9', 'template_dio63xg', values, '4GpiB36LRjlt0lz7H')
                    .then(res => alert('Se ha enviado correctamente'))
                actions.resetForm();
            }}
        >

            <Form className='fs-4'>
                <fieldset className='border border-dark-subtle py-4 px-2 mb-3'>
                    <legend className='fs-4 text-start'>Información General</legend>
                    <div className='mb-3  text-start text-danger'>
                        <label className="form-label text-black" htmlFor="nombre">NOMBRE Y APELLIDO:</label>
                        <Field className="form-control fs-4" name="nombre" type="text" />
                        <ErrorMessage name="nombre" />
                    </div>
                    <div className='mb-3  text-start text-danger'>
                        <label className="form-label text-black" htmlFor="email">E-MAIL:</label>
                        <Field className="form-control fs-4" name="email" type="email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div className='mb-3  text-start text-danger'>
                        <label className="form-label text-black" htmlFor="telefono">TELEFONO:</label>
                        <Field className="form-control fs-4" name="telefono" type="text" />
                        <ErrorMessage name="telefono" />
                    </div>
                    <div className='mb-3 text-start text-danger'>
                        <label className="form-label text-black" htmlFor="mensaje">MENSAJE:</label>
                        <Field className="form-control fs-4" name="mensaje" as="textarea" />
                        <ErrorMessage name="mensaje" />
                    </div>
                </fieldset>

                <button className="btn btn-success fs-3" type="submit">Enviar</button>
            </Form>
        </Formik>
    )
}

export default ContactarForm
