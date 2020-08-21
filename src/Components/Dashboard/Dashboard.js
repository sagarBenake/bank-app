import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import { Descriptions,Divider  } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerDetails:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3333/registration?email=sagar.benake@hotmail.com").then(response => {
            this.setState({
                customerDetails:response.data[0]
            })
        })
    }
    render() {
        return (
                <div>
                   <Divider style={{color:'#2780FF'}}>Customer Information</Divider>
                   <Descriptions bordered>
        <Descriptions.Item label="Cusomer Name">{this.state.customerDetails.customerName}</Descriptions.Item>
                        <Descriptions.Item label="Address" span={2}>{this.state.customerDetails.address}</Descriptions.Item>
                        <Descriptions.Item label="Email ">{this.state.customerDetails.email}</Descriptions.Item>
                        <Descriptions.Item label="Contact No">{this.state.customerDetails.contactNumber}</Descriptions.Item>
                        <Descriptions.Item label="Date of Birth">{this.state.customerDetails.dob}</Descriptions.Item>
                        <Descriptions.Item label="Account Type">{this.state.customerDetails.accountType}</Descriptions.Item>
                        <Descriptions.Item label="Branch Name">{this.state.customerDetails.branchName}</Descriptions.Item>
                        <Descriptions.Item label="Current Balance"><span style={{fontSize:'20px'}}>{this.state.customerDetails.initDepositAmount}</span></Descriptions.Item>
                    </Descriptions>
                </div>
        );
    }
}

Dashboard.propTypes = {

};

export default Dashboard;