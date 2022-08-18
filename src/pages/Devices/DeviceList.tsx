import React, { Fragment, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './DeviceList.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import search from "../../images/search.png"
import arrow from "../../images/arrow.png"

const activeStatuses = [
  'Tất cả',
  'Hoạt động',
  'Ngừng hoạt động'
];

const connectStatuses = [
    'Tất cả',
    'Kết nối',
    'Mất kết nối'
];

const DeviceList = () => {
    const [activeStatus, setActiveStatus] = useState<string>("");
    const [connectStatus, setConnectStatus] = useState<string>("");

    const handleChangeActiveStatus = (event: SelectChangeEvent<typeof activeStatus>) => {
        setActiveStatus(event.target.value as string);
    };

    const handleChangeConnectStatus = (event: SelectChangeEvent<typeof connectStatus>) => {
        setConnectStatus(event.target.value as string);
    };
    return(
        <Fragment>
            <Navbar/>
            <div className='table-container'>
                <div className='header'>
                    <p>
                        <a className='prev-link'>Thiết bị</a>
                        <img src={arrow} className='arrow'/>
                        <a className='this-link'>Danh sách thiết bị</a>
                    </p>
                </div>
                <div>
                    <p className='header-txt'>Danh sách thiết bị</p>
                </div>
                <div>
                        <div className='filter-fields'>
                            <div>
                                <label>Trạng thái hoạt động</label>
                            </div>
                            <Select
                            className='active-status-input'
                            displayEmpty
                            value={activeStatus}
                            onChange={handleChangeActiveStatus}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                return selected;
                            }}
                            >
                            {activeStatuses.map((status) => (
                                <MenuItem
                                key={status}
                                value={status}
                                >
                                {status}
                                </MenuItem>
                            ))}
                            </Select>
                        </div>

                        <div className='filter-fields'>
                            <div>
                                <label>Trạng thái kết nối</label>
                            </div>
                            <Select
                            className='connect-status-input'
                            displayEmpty
                            value={connectStatus}
                            onChange={handleChangeConnectStatus}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                return selected;
                            }}
                            >
                            {connectStatuses.map((status) => (
                                <MenuItem
                                key={status}
                                value={status}
                                >
                                {status}
                                </MenuItem>
                            ))}
                            </Select>
                        </div>

                        <div className='filter-fields search-field'>
                            <div>
                                <label>Từ khóa</label>
                            </div>
                            <div>
                                <input type="text" className='search-keyword-input' placeholder='Nhập từ khóa'/>
                                <img src={search} className='search-icon'/>
                            </div>
                        </div>
                </div>
                <table className="list-table">
                    <thead>
                        <tr className="table-heading">
                            <th>Mã thiết bị</th>
                            <th>Tên thiết bị</th>
                            <th>Địa chỉ IP</th>
                            <th>Trạng thái hoạt động</th>
                            <th>Trạng thái kết nối</th>
                            <th>Dịch vụ sử dụng</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                <td>KIO_01</td>
                                <td>Kiosk</td>
                                <td>192.168.1.10</td>
                                <td>Ngưng hoạt động</td>
                                <td>Mất kết nối</td>
                                <td>Khám tim mạch, Khám mắt...</td>
                                <td><a href='#'>Chi tiết</a></td>
                                <td><a href='#'>Cập nhật</a></td>
                        </tr> 
                        <tr>
                                <td>KIO_01</td>
                                <td>Kiosk</td>
                                <td>192.168.1.10</td>
                                <td>Ngưng hoạt động</td>
                                <td>Mất kết nối</td>
                                <td>Khám tim mạch, Khám mắt...</td>
                                <td><a href='#'>Chi tiết</a></td>
                                <td><a href='#'>Cập nhật</a></td>
                        </tr> 
                        <tr>
                                <td>KIO_01</td>
                                <td>Kiosk</td>
                                <td>192.168.1.10</td>
                                <td>Ngưng hoạt động</td>
                                <td>Mất kết nối</td>
                                <td>Khám tim mạch, Khám mắt...</td>
                                <td><a href='#'>Chi tiết</a></td>
                                <td><a href='#'>Cập nhật</a></td>
                        </tr> 
                        <tr>
                                <td>KIO_01</td>
                                <td>Kiosk</td>
                                <td>192.168.1.10</td>
                                <td>Ngưng hoạt động</td>
                                <td>Mất kết nối</td>
                                <td>Khám tim mạch, Khám mắt...</td>
                                <td><a href='#'>Chi tiết</a></td>
                                <td><a href='#'>Cập nhật</a></td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default DeviceList