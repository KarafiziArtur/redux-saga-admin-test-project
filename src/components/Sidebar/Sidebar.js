import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick = (e) => {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  };

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to='/departments' className="nav-link" activeClassName="active"><i className="icon-briefcase"/> Departments</Link>
            </li>
            <li className="nav-item">
              <Link to='/employees' className="nav-link" activeClassName="active"><i className="icon-people"/> Employees</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
