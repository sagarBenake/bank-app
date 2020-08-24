import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Form,
    Input, Layout,
    Divider,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete, InputNumber, DatePicker,
} from 'antd';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import moment from 'moment';
import { QuestionCircleOutlined } from '@ant-design/icons';

class DepositAmount extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            accountType:"Salary",
            currentBalance:5000,
            depositAmount:null
        }
    }

    formRef = React.createRef();

     // handle change text
     handleChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    //submit form
    submitForm = () => {
       let newCurrentBalance=this.state.currentBalance+this.state.depositAmount;
       if(this.state.depositAmount!=null)
       this.setState({ 
           currentBalance: newCurrentBalance,
           depositAmount:null,
           show: true 
        });
        this.formRef.current.resetFields();
    }


    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 9 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0, },
                sm: { span: 24, offset: 0, },
            },
        };
        return (
            <div>
                <Divider style={{color:'#2780FF'}}>Deposit Amount into Account</Divider>
                <Form
                    {...formItemLayout}
                    name="deposit"
                    scrollToFirstError
                    onFinish={() => this.submitForm()}
                    ref={this.formRef}
                >
                    <Form.Item
                        name="accountType"
                        label="Account Type"
                    >
                        <Input value={this.state.accountType} disabled/>
                        <span></span>
                    </Form.Item>

                    <Form.Item
                        name="currentBalance"
                        label="Current Balace"
                    >
                        <Input value={this.state.currentBalance} disabled/>
                        <span></span>
                    </Form.Item>

                    <Form.Item
                        name="depositAmount"
                        label="Deposit Amount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your deposit amount!',
                            },
                        ]}
                    >
                        <InputNumber
                            min={1}
                            style={{ width: '100%' }}
                            onChange={e => this.handleChangeText(e, "depositAmount")}
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" >
                            Deposit Amount
                        </Button>
                        <Link to="/dashboard">
                            <Button type="default" style={{ margin: '0 8px' }}>
                                Cancel
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
                <SweetAlert
                    show={this.state.show}
                    title="Done"
                    text="Amount Deposited Successfully"
                    success
                    onConfirm={() => this.setState({ show: false })}
                />
            </div>
        );
    }
}

DepositAmount.propTypes = {

};

export default DepositAmount;