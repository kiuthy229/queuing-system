import React, { Fragment, useState } from 'react'
import "./AddDevice.css"
import arrow from "../../../images/arrow.png"

const AddDevice = () => {
    return(
        <Fragment>
            <div className='table-container'>
                <div className='header'>
                    <p>
                        <a className='prev-link'>Thiết bị</a>
                        <img src={arrow} className='arrow'/>
                        <a className='prev-link'>Danh sách thiết bị</a>
                        <img src={arrow} className='arrow'/>
                        <a className='this-link'>Thêm thiết bị</a>
                    </p>
                </div>
                <div>
                    <p className='header-txt'>Quản lý thiết bị</p>
                </div>

                <div className='add-device-form'>
                    <label>Thông tin thiết bị</label>

                    <div>
                        <label>Mã thiết bị</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>

                    <div>
                        <label>Loại thiết bị</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>

                    <div>
                        <label>Tên thiết bị</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>

                    <div>
                        <label>Tên đăng nhập</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>

                    <div>
                        <label>Địa chỉ IP</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>

                    <div>
                        <label>Mật khẩu</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>

                    <div>
                        <label>Dịch vụ sử dụng</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                </div>

                <div>
                    <button className='cancel-btn'>
                        Hủy bỏ
                    </button>
                    <button className='confirm-btn'>
                        Thêm Thiết bị
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default AddDevice;