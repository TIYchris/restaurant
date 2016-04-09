import React from 'react';
import { Link } from 'react-router';
import Banner from 'ui/bannerImageComponent';
import Social from "ui/social-media";
import SpecialContainer from "ui/special-container";
import Maps from "ui/google-maps";
import Food from "ui/food-photos";
import Blog from "ui/blog";
import Menu from "ui/menu";
import BlogContainer from "ui/blog-container";
import ContentNavBar from "ui/contentNavBar"
import MenuContainer from "ui/menu-container"
// import Reservation from "ui/reservation"

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
        {this.props.children}
        <ContentNavBar/>
        <div className="menuFlex">
          <div className="contentBox">
            <MenuContainer/>       
           {this.props.children}
          </div>

          <Food/>
        </div>

        <div id="footer">
          <p className="copy">&copy; 2016 Rocky Slims</p>
        </div>
      </div>
    );
  }
})