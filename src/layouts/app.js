import React from 'react';
import { Link } from 'react-router';
import Banner from 'ui/bannerImageComponent';

require('assets/styles/styles.scss');


export default React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="header">
          <img src="images/rocky-slims-logo-big.png" />
          <div id="social">
            <ul id="icons">
              <li className="zocial-facebook"></li>
              <li className="zocial-twitter"></li>
              <li className="zocial-instagram"></li>
              <li className="zocial-opentable"></li>
            </ul>
            <Banner/>
          </div>  
        </div>
        {this.props.children}
        <div id="footer">
          <p>&copy; 2016 TIY</p>
        </div>
      </div>
    );
  }
})