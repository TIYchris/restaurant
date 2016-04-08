import React from 'react';
require('assets/styles/special.scss');


export default React.createClass({
  render: function () {
    return(
    	<div className="specialBox">
    		<h3 className="headerBox">Today's Special</h3>
    		<div></div>
    		<img id="special" src="/images/scallops_small.png" />
    	</div>
    )
  }
})