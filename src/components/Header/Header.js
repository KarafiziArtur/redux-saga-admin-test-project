import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {

  sidebarToggle = (e) => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  };

  mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  };

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <Link className="navbar-brand" to="/" />
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
