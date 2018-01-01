import React, { Component } from 'react';
import './Header.css';
//for routing navbar links
import { Link } from 'react-router-dom';

//stateful Component
class Header extends Component {
  render() {
    return (
      //use className cos JSX
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/">React App</a>
            <button className="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
            </div>

            <div className="navbar-end navbar-menu">
              <Link to="/" className="nav-item">Home</Link>
              <Link to="/faq" className="nav-item">Features</Link>
              <Link to="/faq" className="nav-item">About</Link>
              <Link to="/faq" className="nav-item">FAQ</Link>

              <div className="navbar-item">
                <p className="control">
                  <a className="button is-primary is-outlined">
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Join Now </span>
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default Header;
