import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from "../../images/alta_logo.png"
import signout from "../../images/logout.png"
import { ReactComponent as Dashboard} from "../../images/dashboard_icon.svg"
import { ReactComponent as Device} from "../../images/device_icon.svg"
import { ReactComponent as Service} from "../../images/service_icon.svg"
import { ReactComponent as Level} from "../../images/level_icon.svg"
import { ReactComponent as Report} from "../../images/report_icon.svg"
import { ReactComponent as Setting} from "../../images/setting_icon.svg"

const items = [
    { name: 'Dashboard', icon: <Dashboard/>, path: 'panel' },
    { name: 'Thiết bị', icon: <Device/>, path: 'device/list' },
    { name: 'Dịch vụ', icon: <Service/>, path: 'service/list' },
    { name: 'Cấp số', icon: <Level/>, path: 'queue/list' },
    { name: 'Báo cáo', icon: <Report/>, path: 'report/create'},
    { name: 'Cài đặt hệ thống', icon: <Setting/>, path: 'system/accounts' },
  ];
const Navbar = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const [path, setPath] = useState<string>('');
    useEffect(() => {
      const arr = location.pathname.split('/');
      setPath(arr[2]);
    }, [path, location]);
  
    return (
      <div className='app__sidebar'>
        <div className='app__sidebar__logo'>
            <img style={{width:"100px", height:"90px"}} src={logo}/>
        </div>
        <div className='app__sidebar__items-container'>
          {items.map((item) => {
            return (
              <div
                className={`menu-item ${
                  item.path?.includes(path) ? `selected` : ``
                }`}
                key={item.name}
                onClick={() => navigate(`${item.path ? item.path : ``}`)}
              >
                <div className='menu-item__icon'>{item.icon}</div>
                <div className='menu-item__name'>{item.name}</div>
              </div>
            );
          })}
        </div>
        <div className='app__sidebar__sign-out'>
          <button className='signout-btn'>
            <span>
                <img style={{width:"15px", height:"15px"}} src={signout}/>
            </span>
            <span className='signout-txt'>Đăng xuất</span>
          </button>
        </div>
      </div>
    );
}

export default Navbar;