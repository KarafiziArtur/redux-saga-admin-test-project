import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import {addEmployee, updateEmployee, removeEmployee} from '../../actions/employeeActions';
import EmployeesItem from './EmployeesItem';

class Employees extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    departments: PropTypes.any.isRequired,
    employees: PropTypes.any.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let first_name = e.target.first_name.value;
    let last_name = e.target.last_name.value;
    let department_id = e.target.department_id.value;
    if (first_name && last_name && department_id) {
      const employee = {
        first_name,
        last_name,
        department_id
      };
      this.props.dispatch(addEmployee(employee));
      this.clearAddingEmployeeForm(e.target);
    }
  };

  clearAddingEmployeeForm = (target) => {
    target.first_name.value = '';
    target.last_name.value = '';
    target.department_id.value = 1;
  };

  handleRemove = (id) => {
    this.props.dispatch(removeEmployee(id));
  };

  handleEdit = (employee) => {
    this.props.dispatch(updateEmployee(employee));
  };

  render() {
    const { departments, employees } = this.props;
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>Add new Employees</strong>
              </div>
              <div className="card-block">
                <form onSubmit={this.handleSubmit} className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-md-3 col-sm-6">
                      <input type="text" name="first_name" className="form-control" placeholder="Enter first name.." required/>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <input type="text" name="last_name" className="form-control" placeholder="Enter last name.." required/>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <select name="department_id" id="department_id" className="form-control" size="1">
                        {
                          departments &&
                            departments.map(department => (
                                <option key={department.id} value={department.id}>{department.name}</option>
                            ))
                        }
                      </select>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <button type="submit" className="btn btn-primary"><i className="fa fa-plus-circle"/>&nbsp; Add
                        new Employee
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
            <table className="table table-hover table-outline mb-0" style={{ background: "white" }}>
              <thead className="thead-default">
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">First Name</th>
                <th className="text-center">Last Name</th>
                <th className="text-center">Department</th>
                <th className="text-center">Actions</th>
              </tr>
              </thead>
              <tbody>
                {
                  employees &&
                      employees.map(employee => (
                          <EmployeesItem key={employee.id}
                                         employee={employee}
                                         departments={departments}
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

export default connect(state => ({ departments: state.departments, employees: state.employees }))(Employees);
