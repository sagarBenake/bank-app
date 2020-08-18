import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Descriptions,Divider  } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

class Dashboard extends Component {
    render() {
        return (
                <div>
                   <Divider style={{color:'#2780FF'}}>Customer Information</Divider>
                   <Descriptions bordered>
                        <Descriptions.Item label="Cusomer Name">Sagar Tukaram Benake</Descriptions.Item>
                        <Descriptions.Item label="Address" span={2}>Plot No : 92 Raghavendra Nagar Khasbag,Belgaum</Descriptions.Item>
                        <Descriptions.Item label="Email ">sagar.benake@hotmail.com</Descriptions.Item>
                        <Descriptions.Item label="Contact No">9738680443</Descriptions.Item>
                        <Descriptions.Item label="Date of Birth">2018-04-24</Descriptions.Item>
                        <Descriptions.Item label="Account Type">Salary</Descriptions.Item>
                        <Descriptions.Item label="Branch Name">Pune</Descriptions.Item>
                        <Descriptions.Item label="Current Balance"><span style={{fontSize:'20px'}}>$80.00</span></Descriptions.Item>
                    </Descriptions>
                </div>
        );
    }
}

Dashboard.propTypes = {

};

export default Dashboard;