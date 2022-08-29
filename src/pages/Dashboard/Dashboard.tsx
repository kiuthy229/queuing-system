import React, { Fragment } from 'react'
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import './Dashboard.css';
import Panel from './Panel/Panel';

const Dashboard = () => {
    return (<Fragment>
                    <Navbar/>
                    <Panel/>
            </Fragment>);
}
 
export default Dashboard;

