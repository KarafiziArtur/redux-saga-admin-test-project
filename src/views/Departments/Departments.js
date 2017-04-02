import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addDepartment, updateDepartment, removeDepartment} from '../../actions/departmentActions';
import DepartmentsItem from "./DepartmentsItem";

class Departments extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    departments: PropTypes.any.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    if (name) {
      this.props.dispatch(addDepartment(name));
      e.target.name.value = '';
    }
  };

  handleRemove = (id) => {
    this.props.dispatch(removeDepartment(id));
  };

  handleEdit = (department) => {
    this.props.dispatch(updateDepartment(department));
  };

  render() {
    const {departments} = this.props;
    return (
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <strong>Add new Departments</strong>
                </div>
                <div className="card-block">
                  <form onSubmit={this.handleSubmit} className="form-horizontal">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Enter name.." required/>
                      </div>
                      <div className="col-md-6">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-plus-circle"/>&nbsp; Add
                          new Department
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover table-outline mb-0" style={{background: "white"}}>
                <thead className="thead-default">
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center">Department Name</th>
                  <th className="text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                  departments &&
                  departments.map(department => (
                      <DepartmentsItem key={department.id}
                                       department={department}
                                       onEdit={this.handleEdit}
                                       onRemove={this.handleRemove}
                      />
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
  }
}

export default connect(state => ({departments: state.departments}))(Departments);
