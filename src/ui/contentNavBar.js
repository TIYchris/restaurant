import React from 'react';
import { Link } from 'react-dom';
require('assets/styles/contentNavBar.scss');


export default React.createClass({
	render: function(){
		return (
			  <nav className="tabs">
			    <a href="/" id="story">Our Story</a>
			    <a href="/" id="menu">Menu</a>
			    <a href="/" id="resForm">Reservations</a>
			  </nav>
		)
	}
})