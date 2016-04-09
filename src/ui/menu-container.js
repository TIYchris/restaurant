import React from "react";
import Menu from "ui/menu";
import { getMenu } from "api/data";

export default React.createClass({
	getInitialState: function (){
		return {
			menu: {}
		}
	},

	componentWillMount: function () {
		var _this = this;

		getMenu().then(function(resp){
			_this.setState({
				menu: resp.data
				console.log(resp.data);
			})
		}).catch(function(err){
			console.error(err);
		})
	},
	render: function(){
		return (
			<Menu menu={this.state.menu} />
		)
	}
})