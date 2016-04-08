import React from 'react';
import { Link } from 'react-router';
require('assets/styles/styles.scss');


export default React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="header">
<<<<<<< HEAD
          <div id="social">
            <ul id="icons">
              <li className="zocial-facebook"></li>
              <li className="zocial-twitter"></li>
              <li className="zocial-instagram"></li>
              <li className="zocial-opentable"></li>
            </ul>
          </div>  
=======
        <img src="images/rocky-slims-logo-big.png" />
>>>>>>> 325d927c0f40583979b51115e3452ee6923c55e5
        </div>
        {this.props.children}
        <div id="footer">
          <p>&copy; 2016 TIY</p>
        </div>
      </div>
    );
  }
})