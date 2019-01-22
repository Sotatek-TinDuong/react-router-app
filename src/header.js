import React, { Component } from 'react';
import Nav from './Nav';

class header extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>This is Header</h2>
          <Nav />
        </div>
      </div>
    );
  }
}

export default header;