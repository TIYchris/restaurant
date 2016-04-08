import React from "react";

require('assets/styles/maps.scss');

export default React.createClass({
  render: function () {
    return(
    	<div className="map-container">
    	<h3 id="location"> Location </h3>
    	<iframe
		  width="300"
		  height="150"
		  frameBorder="0"
		  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDRztemBk6vYNumQzoIVGsdFAG8bVFNVl0
		    &q=1112 S Casino Center Blvd, Las Vegas, NV 89104" allowFullScreen>
		</iframe>
		<p id="address"> 1112 S Casino Center Blvd, Las Vegas, NV 89104 </p>
    	</div>
    )
  }
})