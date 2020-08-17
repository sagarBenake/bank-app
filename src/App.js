import React, { Component, useState } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import ApplyLoan from './Components/ApplyLoan/ApplyLoan';
import UpdateDetails from './Components/UpdateDetails/UpdateDetails';
import Registration from './Components/Registration/Registration'
import PageNotFound from './Components/Authentication/PageNotFound';

import { useDispatch,useStore } from 'react-redux';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

class App extends Component {
  
render(){
  const {isAuthenticate}=this.props;
  return (
    <div className="App">
      <Router>
        {/* top header menus */}
          {isAuthenticate ?<Header />:null}
        <div>
          {
            !isAuthenticate ?
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/registration">
                  <Registration />
                </Route>
                <Redirect
                  to={{
                  pathname: "/",
                  // state: { from: location }
                 }}
               /> 
                <Route path="*">
                   <PageNotFound />
                </Route>
              </Switch>
              :
              <Switch>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/applyLoan">
                  <ApplyLoan />
                </Route>
                <Route path="/updateDetails">
                  <UpdateDetails />
                </Route>
              </Switch>
          }
        </div>
      </Router>
    </div>
  );
}
}

// export default App;
function mapStateToProps(state) {
  return state.BankingStore;
}

// function dispatchStartProps(dispatch) {
//   return {
//       updateAuthStatus: (text) => dispatch(ActionCreator.updateAuthStatus(text))
//   }
// }

export default connect(mapStateToProps)(App);
