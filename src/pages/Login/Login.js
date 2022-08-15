import React, { Fragment } from 'react'
import './Login.css'
import login from "../../images/login_img.png"
import logo from "../../images/alta_logo.png"

const Login = () => {
    return ( <Fragment>
                <div className='inner login-left'>
                    <div>
                        <img className='logo' src={logo}/>
                    </div>
                    <label>Tên Đăng Nhập</label>
                    <div>
                        <input className='login-input' type="text"/>   
                    </div>

                    <label>Mật Khẩu</label>
                    <div>
                        <input className='login-input' type="text"/>   
                    </div>
                    <p style={{color:"red"}}>Quên mật khẩu?</p>   
                    <button className='login-btn' type='submit'>Đăng nhập</button>     
                </div>
                <div className='inner login-right'>
                    <img className='login-img' src={login}/>
                </div>
            </Fragment> );
}
 
export default Login;