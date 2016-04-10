import React from 'react';
import { Link } from 'react-router';
require('assets/styles/contentNavBar.scss');


export default React.createClass({
	render: function(){
		return (
			  <nav className="tabs">
			    <Link to="/ourStory" id="story">Our Story</Link>
			    <Link to="/menu-container" id="menu">Menu</Link>
			    <Link to="/reservation" id="resForm">Reservations</Link>
			  </nav>
		)
	}
})