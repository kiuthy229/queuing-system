import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Device = () => {

    return(
        <Fragment>
            <Navbar/>
            <Outlet/>
        </Fragment>
    )
}

export default Device;