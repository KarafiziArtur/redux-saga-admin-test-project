import React, {Component, PropTypes} from 'react';

class DepartmentsItem extends Component {

  static propTypes = {
    department: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  state = {
    isEditing: false,
    name: this.props.department.name
  };

  renderUsuallyButtons = () => {
    return (
        <td className="text-center">
          <button type="button" className="btn btn-primary mr-1" onClick={this.openEditing}>
            <i className="fa fa-pencil"/>&nbsp;Edit
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={this.props.onRemove.bind(null, this.props.department.id)}>
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
    this.setState({ isEditing: true, name: this.props.department.name });
  };

  onSave = () => {
    const department = {
      id: this.props.department.id,
      name: this.state.name
    };
    this.props.onEdit(department);
    this.setState({ isEditing: false });
  };

  setDefaultName = () => {
    this.setState({ isEditing: false, name: this.props.department.name })
  };

  cancelEditing = () => {
    this.setDefaultName();
  };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {department} = this.props;
    return (
        <tr>
          <td className="text-center">{department.id}</td>
          <td className="text-center">
            {
              this.state.isEditing ?
                  <input type="text" name="name" className="form-control" onChange={this.onChangeHandler} value={this.state.name} />
                  :
                  <span>{department.name}</span>
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
