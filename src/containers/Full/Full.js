import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Breadcrumbs from 'react-breadcrumbs';

import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Footer from '../../components/Footer/';

import {getDepartments} from '../../actions/departmentActions';
import {getEmployees} from '../../actions/employeeActions';

class Full extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(getDepartments());
    this.props.dispatch(getEmployees());
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumbs
              wrapperElement="ol"
              wrapperClass="breadcrumb"
              itemClass="breadcrumb-item"
              separator=""
              routes={this.props.routes}
              params={this.props.params}
            />
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect()(Full);
