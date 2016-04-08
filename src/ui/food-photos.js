import React from "react";

require('assets/styles/food-pics.scss');

export default React.createClass({
	render: function () {
		return (
			<div className="photo-container">
				<div className='photo'>
					<img src="/images/breadsticks.jpg"/>
				</div>
				<div className='photo'>
					<img src="/images/cabbagesoup-still-superJumbo.jpg"/>
				</div>
				<div className='photo'>
					<img src="/images/Salad.jpg"/>
				</div>
				<div className='photo'>
					<img src="/images/steak.jpg"/>
				</div>
				<div className='photo'>
					<img src="/images/Supreme-pizza.jpg"/>
				</div>
			</div>
		)
	}
})