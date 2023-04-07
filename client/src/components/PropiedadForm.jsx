import React, { useContext, useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const PropiedadForm = ({ valoresIniciales, agregarPropiedad, botonTexto }) => {

    const navigation = useNavigate();

    const [imagenUrl, setImagenUrl] = useState('');

    const { setLogeado } = useContext(LoginContext);

    const [vendedores, setVendedores] = useState([]);

    useEffect(() => {
        const obtenerVendedores = async () => {
            try {
                const rpta = await axios.get(`${process.env.REACT_APP_API_URL}/vendedores`, { withCredentials: true });
                setLogeado(true);
                setVendedores(rpta.data);
            } catch (error) {
                setLogeado(false);
                navigation('/Login');
            }

        }
        obtenerVendedores();
    }, []);

    function handleSubmit(values) {
        // Aquí puedes enviar los datos del formulario al servidor
        // Luego, obtienes la URL de la imagen del servidor y la guardas en el estado imageUrl
        const { imagen } = values;
        const reader = new FileReader();
        reader.onload = () => {
            setImagenUrl(reader.result);
        };
        reader.readAsDataURL(imagen);
    }

    const validationSchema = Yup.object().shape({
        titulo: Yup.string()
            .min(4, 'Debe tener al menos 4 caracteres')
            .required('Requerido'),
        precio: Yup.number()
            .positive('La cantidad debe ser positiva')
            .required('Requerido'),
        imagen: Yup.mixed(),
            // .required('Debe seleccionar una imagen'),
        descripcion: Yup.string()
            .min(5, 'Debe tener al menos más de 5 caracteres')
            .required('Requerido'),
        habitaciones: Yup.number()
            .positive('La cantidad debe ser positiva')
            .required('Requerido'),
        baños: Yup.number()
            .positive('La cantidad debe ser positiva')
            .required('Requerido'),
        estacionamientos: Yup.number()
            .positive('La cantidad debe ser positiva')
            .required('Requerido'),
        vendedor: Yup.string()
            .required('Requerido'),
    });


    return (
        <Formik
            enableReinitialize={true}
            initialValues={valoresIniciales}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                let data = JSON.stringify(
                    {
                        titulo: values.titulo,
                        precio: values.precio,
                        descripcion: values.descripcion,
                        habitaciones: values.habitaciones,
                        baños: values.baños,
                        estacionamientos: values.estacionamientos,
                        vendedor: values.vendedor
                    }
                );

                const formData = new FormData();
                
                
                formData.append('file', values.imagen);
                formData.append('data', data);
                
                agregarPropiedad(formData, actions);
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form className='fs-3'>
                    <fieldset className='border border-dark-subtle py-4 px-2 mb-3'>
                        <legend className='fs-4 text-start'>Información General</legend>
                        <div className='mb-3  text-start text-danger'>
                            <label className="form-label text-black" htmlFor="titulo">TITULO:</label>
                            <Field className="form-control fs-4" name="titulo" type="text" />
                            {errors.titulo && touched.titulo && <div>{errors.titulo}</div>}
                        </div>
                        <div className='mb-3 text-start text-danger'>
                            <label className="form-label text-black" htmlFor="precio">PRECIO:</label>
                            <Field className="form-control fs-4" name="precio" type="number" />
                            {errors.precio && touched.precio && <div>{errors.precio}</div>}
                        </div>
                        <div className='mb-3 text-start text-danger'>
                            <label className="form-label text-black" htmlFor="image">Imagen</label>
                            <input
                                className="form-control fs-4"
                                id="imagen"
                                name="imagen"
                                type="file"
                                accept='image/jpg, image/jpeg'
                                onChange={(event) => {
                                    setFieldValue("imagen", event.currentTarget.files[0]);
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        setImagenUrl(reader.result);
                                    };
                                    reader.readAsDataURL(event.currentTarget.files[0]);
                                }}
                            />
                            {errors.imagen && touched.imagen && <div>{errors.imagen}</div>}
                        </div>
                        <div>
                            {imagenUrl && <img src={imagenUrl} alt="Imagen agregada" height={170} />}
                        </div>
                        <div className='mb-3 text-start text-danger'>
                            <label className="form-label text-black" htmlFor="descripcion">DESCRIPCION:</label>
                            <Field className="form-control fs-4" name="descripcion" as="textarea" />
                            {errors.descripcion && touched.descripcion && <div>{errors.descripcion}</div>}
                        </div>
                    </fieldset>

                    <fieldset className='border border-dark-subtle py-4 px-2 mb-3'>
                        <legend className='fs-4 text-start'>Información Propiedad</legend>
                        <div className='mb-3 text-start text-danger'>
                            <label className="form-label text-black" htmlFor="habitaciones">HABITACIONES:</label>
                            <Field className="form-control fs-4" name="habitaciones" type="number" />
                            {errors.habitaciones && touched.habitaciones && <div>{errors.habitaciones}</div>}
                        </div>
                        <div className='mb-3 text-start text-danger'>
                            <label className="form-label text-black" htmlFor="baños">BANOS:</label>
                            <Field className="form-control fs-4" name="baños" type="number" />
                            {errors.baños && touched.baños && <div>{errors.baños}</div>}
                        </div>
                        <div className='mb-3 text-start text-danger'>
                            <label className="form-label text-black" htmlFor="estacionamientos">ESTACIONAMIENTOS:</label>
                            <Field className="form-control fs-4" name="estacionamientos" type="number" />
                            {errors.estacionamientos && touched.estacionamientos && <div>{errors.estacionamientos}</div>}
                        </div>
                    </fieldset>

                    <fieldset className='border border-dark-subtle py-4 px-2 mb-3'>
                        <legend className='fs-4 text-start'>Información Vendedor</legend>
                        <div className='mb-3 text-start text-danger'>
                            <label className="form-label text-black" htmlFor="vendedor">VENDEDOR:</label>
                            <Field className="form-select fs-4" name="vendedor" as="select">
                                <option value='no vendedor'>--Seleccionar--</option>
                                {
                                    vendedores?.map((vendedor, index) =>
                                        <option key={index} value={vendedor._id}>{`${vendedor.nombre} ${vendedor.apellido} - ${vendedor.telefono}`}</option>
                                    )
                                }
                            </Field>
                            <ErrorMessage name="vendedor" />
                        </div>
                    </fieldset>

                    <button className="btn btn-success fs-3" type="submit">{botonTexto}</button>
                </Form>
            )}
        </Formik>
    )
}

export default PropiedadForm;


