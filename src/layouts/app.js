import React from 'react';
import { Link } from 'react-router';
import Banner from 'ui/bannerImageComponent';
import Social from "ui/social-media";
import SpecialContainer from "ui/special-container";
import Maps from "ui/google-maps";
import Food from "ui/food-photos";
import Blog from "ui/blog";
import BlogContainer from "ui/blog-container";

require('assets/styles/styles.scss');


export default React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="header">
          <img id="logo"src="images/rocky-slims-logo-big.png" />
              <Social/>
              <Banner/>
              <div className="midBar">
                <BlogContainer/>
                <SpecialContainer/>
                <Maps/>
              </div>
        </div>
        <Food/>
        {this.props.children}
        <div id="footer">
          <p>&copy; 2016 Rocky Slims</p>
        </div>
      </div>
    );
  }
})