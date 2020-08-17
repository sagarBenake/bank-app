import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { 
    HomeOutlined,
    DollarOutlined,
    LogoutOutlined, 
    FormOutlined
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div>
                 <Menu mode="horizontal">
                    <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                       <Link to="/dashboard">Dashboard</Link>
                       </Menu.Item>
                    <Menu.Item key="applyLoan" icon={<DollarOutlined />}>
                       <Link to="/applyLoan">Apply Loan</Link> 
                    </Menu.Item>
                    <Menu.Item key="updateDetails" icon={<FormOutlined />}>
                    <Link to="/updateDetails">Update Details</Link>  
                        </Menu.Item>
                    <Menu.Item key="Logout" icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;