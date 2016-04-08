import React from 'react';
require('assets/styles/special.scss');


export default React.createClass({

  render: function () {
    return(
    	<div className="specialBox">
    		<h3 className="headerBox">Today's Special</h3>
    		<div></div>
    		<img id="special" src="/images/scallops_small.png" />
    		<h4 className="foodName">{this.props.special.item} {this.props.special.price}</h4>
    		<h5 className="foodDescription">{this.props.special.description}</h5>

    	</div>
    )
  }
})