import React, { Fragment } from 'react';
import './ForgotPassword.css';
import login from "../../images/forgot_img.png";
import logo from "../../images/alta_logo.png";
import { Formik } from 'formik';

const ForgotPassword = () => {
    return ( <Fragment>
                <Formik
                    initialValues={{ email: '' }}
                    validate={values => {
                        const errors = {email:''};
                        if(!values.email){
                            errors.email = 'Required';
                        }else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                          ) {
                            errors.email = 'Invalid email address';
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
                                    <p className='reset-txt'>Đặt lại mật khẩu</p>
                                    <label className='txt'>Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
                                    <div>
                                        <input  className='forgot-email-input' 
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                        />   
                                    </div>
                                    <div>{errors.email && touched.email && errors.email}</div>
                                    
                                    <div className='forgot-buttons'>
                                        <button className='cancel-btn' type='button'>Hủy</button>
                                        <button className='continue-btn' type='submit' disabled={isSubmitting}>Tiếp tục</button>    
                                    </div>
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
 
export default ForgotPassword;