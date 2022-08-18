import React, { Fragment } from 'react';
import './ResetPassword.css';
import login from "../../images/forgot_img.png";
import logo from "../../images/alta_logo.png";
import { Formik } from 'formik';

const ResetPassword = () => {
    return ( <Fragment>
                <Formik
                    initialValues={{ password: '' }}
                    validate={values => {
                        const errors = {password:''};
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

                                <div className='email-form'>
                                    <p className='reset-txt'>Đặt lại mật khẩu mới</p>
                                    <label className='txt'>Mật khẩu</label>
                                    <div>
                                        <input  className='password-input' 
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                        />   
                                    </div>
                                    <div>{errors.password && touched.password && errors.password}</div>

                                    <label className='txt'>Nhập lại mật khẩu</label>
                                    <div>
                                        <input  className='confirm-password-input' 
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                        />   
                                    </div>
                                    <div>{errors.password && touched.password && errors.password}</div>
                                    
                                    <button className='confirm-btn' type='submit' disabled={isSubmitting}>Xác nhận</button>    
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
 
export default ResetPassword;