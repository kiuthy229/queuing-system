import React, { Fragment } from 'react';
import './Login.css'
import login from "../../images/login_img.png";
import logo from "../../images/alta_logo.png";
import { Formik } from 'formik';

const Login = () => {
    return ( <Fragment>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={values => {
                        const errors = {username: '', password: ''};
                        if(!values.username){
                            errors.username = 'Required';
                        }
                        if(!values.password){
                            errors.password = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>

                            <div className='inner login-left'>
                                <div>
                                    <img className='logo' src={logo}/>
                                </div>

                                <div className='input-form'>
                                    <div>
                                        <label>Tên Đăng Nhập</label>
                                    </div>
                                    <div>
                                        <input  className='login-input' 
                                                type="text"
                                                name="username"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username}
                                        />   
                                    </div>
                                    <div>{errors.username && touched.username && errors.username}</div>

                                    <div>
                                        <label>Mật Khẩu</label>
                                    </div>
                                    <div>
                                        <input  className='login-input'
                                                type="text"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                        />   
                                    </div>
                                    <div>{errors.password && touched.password && errors.password}</div>

                                    <div><a style={{color:"red"}}>Quên mật khẩu?</a></div>

                                    <button className='login-btn' type='submit' disabled={isSubmitting}>Đăng nhập</button>     
                                </div>
                            </div>

                            <div className='inner login-right'>
                                <img className='login-img' src={login}/>
                            </div>
                        </form>
                    )}
                </Formik>
            </Fragment> );
}
 
export default Login;