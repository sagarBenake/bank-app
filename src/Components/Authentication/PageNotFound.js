import React, { Component } from 'react';
import errorLogo from './images/error.jpg'
import { withRouter } from 'react-router-dom';
import {Button} from 'antd';

class PageNotFound extends Component {
    navigateToLogin = () => {
        this.props.history.push({pathname:'/'});
    }
    render() {
        return (
            <div>
                <img src={errorLogo} />
                <div>
                   <Button type="primary" shape="round" onClick={this.navigateToLogin}>Go Back</Button>
                </div>
            </div>
        );
    }
}

PageNotFound.propTypes = {

};

export default withRouter(PageNotFound);