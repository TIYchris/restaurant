import React from "react";

require('assets/styles/social.scss');

export default React.createClass({
	render: function() {
		return (
		<div id="social">
            <ul id="icons">
              <li className="zocial-facebook"></li>
              <li className="zocial-twitter"></li>
              <li className="zocial-instagram"></li>
              <li className="zocial-opentable"></li>
            </ul>
          </div>  
        )
	}
})