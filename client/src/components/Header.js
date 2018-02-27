import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="ledt brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a> Login With Gogle</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
