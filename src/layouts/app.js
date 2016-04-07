import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="header">
        </div>
        {this.props.children}
        <div clasName="footer">
          <p>&copy; 2016 TIY</p>
        </div>
      </div>
    );
  }
})