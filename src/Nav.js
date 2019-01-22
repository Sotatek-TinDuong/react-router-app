import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
        <Link to="/not-match">Not match</Link>
      </div>
    );
  }
}

export default Nav;