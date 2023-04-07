import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useNavigation } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const UserForm = () => {
    const navigate = useNavigate();

    const { logeado, setLogeado } = useContext(LoginContext);

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Email invalido')
                    .required('Requerido'),
                password: Yup.string()
                    .min(8, 'Minimo 8 caracteres')
                    .required('Requerido')
            })}
            onSubmit={(values, actions) => {
                const login = async () => {
                    try {
                        const login = await axios.post(`${process.env.REACT_APP_API_URL}/usuario/login`, values, { withCredentials: true })
                        console.log(login.data.msg);
                        console.log(login.status);
                        if (login.status == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Se ha logeado correctamente!!!',
                            });

                            actions.resetForm();
                            setLogeado(!logeado);
                            navigate('/Admin');
                        }
                    } catch (error) {
                        if (error.response.status == 401) {
                            navigate('/Login');
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Contraseña o usuario incorrecto!!!',
                            })
                        }
                    }

                };
                login();
            }}
        >
            <Form>
                <fieldset className='border border-dark-subtle p-5 mb-3'>
                    <legend className='fs-4 text-start'>Email y Password</legend>
                    <div className='mb-3  text-start text-danger'>
                        <label className="form-label text-black" htmlFor="email">E-MAIL:</label>
                        <Field className="form-control fs-4" name="email" type="email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div className='mb-3  text-start text-danger'>
                        <label className="form-label text-black" htmlFor="password">PASSWORD:</label>
                        <Field className="form-control fs-4" name="password" type="password" />
                        <ErrorMessage name="password" />
                    </div>
                </fieldset>
                <button className="btn btn-success fs-3" type="submit">Iniciar Sesión</button>
            </Form>
        </Formik>
    )
}

export default UserForm
