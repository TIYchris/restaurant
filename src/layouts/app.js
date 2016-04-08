import React from 'react';
import { Link } from 'react-router';
import Banner from 'ui/bannerImageComponent';
import Social from "ui/social-media";
import Maps from "ui/google-maps";

require('assets/styles/styles.scss');


export default React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="header">
          <img id="logo"src="images/rocky-slims-logo-big.png" />
            <Social/>
            <Banner/>  
        </div>
        <Maps/>
        {this.props.children}
        <div id="footer">
          <p>&copy; 2016 TIY</p>
        </div>
      </div>
    );
  }
})