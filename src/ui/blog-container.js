import React from 'react';
import Blog from 'ui/blog';
import { getBlog } from 'api/data';

export default React.createClass({
	getInitialState: function(){
		return {
			news:{}
		}
	},
	componentWillMount: function(){
		var _this = this;

		getBlog().then(function(resp){
			_this.setState({
				news: resp.data
			})
		}).catch(function(err){
			console.error(err);
		})

	},
	render: function(){
		return (
			<Blog blog={this.state.news} />
		)
	}
	
})