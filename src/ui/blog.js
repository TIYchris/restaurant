import React from 'react';
require('assets/styles/blog.scss');

export default React.createClass({
	render: function(){
		return (
		<div className="blog">
			<h3>Latest News</h3>
			<div className="blogFeed">
			<h4>{this.props.blog.title} {this.props.blog.date_published}</h4>
    		<div>{this.props.blog.post}</div>
			<span>read more ></span></div>
		</div>
		)
	}
});	