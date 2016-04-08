import React from 'react';
require('assets/styles/blog.scss');

export default React.createClass(){
	render: function(){
		return (
		<div className="blog">
			<h3>Latest News</h3>
			<div className="blogFeed">{this.props.data.blog}<span>read more ></span></div>
		</div>
		)
	}
}