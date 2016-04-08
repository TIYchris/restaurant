import React from 'react';
import Special from 'ui/special';
import { getSpecial } from 'api/data';

export default React.createClass({
	getInitialState: function(){
		return {
			special:{}
		}
	},
	componentWillMount: function(){
		var _this = this;

		getSpecial(function(special){
			_this.setState({
				special: special
			});
		})
	},
	render: function(){
		return (
			<Special special={this.state.special} />
		)
	}
	
})