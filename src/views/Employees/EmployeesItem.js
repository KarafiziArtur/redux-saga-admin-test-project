import React, {Component, PropTypes} from 'react';

class DepartmentsItem extends Component {

  static propTypes = {
    departments: PropTypes.any.isRequired,
    employee: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  state = {
    isEditing: false,
    first_name: this.props.employee.first_name,
    last_name: this.props.employee.last_name,
    department_id: this.props.employee.department_id
  };

  renderUsuallyButtons = () => {
    return (
        <td className="text-center">
          <button type="button" className="btn btn-primary mr-1" onClick={this.openEditing}>
            <i className="fa fa-pencil"/>&nbsp;Edit
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={this.props.onRemove.bind(null, this.props.employee.id)}>
            <i className="fa fa-remove"/>&nbsp; Delete
          </button>
        </td>
    );
  };

  renderEditButtons = () => {
    return (
        <td className="text-center">
          <button type="button" className="btn btn-primary mr-1" onClick={this.onSave}>
            <i className="fa fa-check"/>&nbsp;Save
          </button>
          <button type="button" className="btn btn-danger" onClick={this.cancelEditing}>
            <i className="fa fa-close"/>&nbsp; Cancel
          </button>
        </td>
    );
  };

  openEditing = () => {
    this.setState({
      isEditing: true,
      first_name: this.props.employee.first_name,
      last_name: this.props.employee.last_name,
      department_id: this.props.employee.department_id
    });
  };

  onSave = () => {
    const employee = {
      id: this.props.employee.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      department_id: this.state.department_id
    };
    this.props.onEdit(employee);
    this.setState({ isEditing: false });
  };

  setDefaultName = () => {
    this.setState({
      isEditing: false,
      first_name: this.props.employee.first_name,
      last_name: this.props.employee.last_name,
      department_id: this.props.employee.department_id
    })
  };

  cancelEditing = () => {
    this.setDefaultName();
  };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getEmployeesDepartmentName = (employee, departments) => {
    const department = departments.find(department => department.id === +employee.department_id);
    return department.name;
  };

  render() {
    const {employee, departments} = this.props;
    return (
        <tr>
          <td className="text-center">{employee.id}</td>
          <td className="text-center">
            {
              this.state.isEditing ?
                  <input type="text" name="first_name" className="form-control" onChange={this.onChangeHandler} value={this.state.first_name} />
                  :
                  <span>{employee.first_name}</span>
            }
          </td>
          <td className="text-center">
            {
              this.state.isEditing ?
                  <input type="text" name="last_name" className="form-control" onChange={this.onChangeHandler} value={this.state.last_name} />
                  :
                  <span>{employee.last_name}</span>
            }
          </td>
          <td className="text-center">
            {
              this.state.isEditing ?
                  <select name="department_id" id="department_id" className="form-control" size="1"
                          onChange={this.onChangeHandler}
                          defaultValue={this.state.department_id}>
                    {
                      departments &&
                      departments.map(department => (
                          <option key={department.id} value={department.id}>{department.name}</option>
                      ))
                    }
                  </select>
                  :
                  <span>
                    {
                      departments &&
                      this.getEmployeesDepartmentName(employee, departments)
                    }
                  </span>
            }
          </td>
          {
            this.state.isEditing ?
                this.renderEditButtons()
                :
                this.renderUsuallyButtons()
          }
        </tr>
    );
  }
}

export default DepartmentsItem;
