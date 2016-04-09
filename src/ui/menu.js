import React from 'react';

require('assets/styles/menu.scss');

export default React.createClass({
  render: function () {
    return(
    	<div id="menu-container">
    		<span className="selection"> Our Dinner Selection... </span>
    		<div id="appetizers">
    			<h3> Appetizers </h3>
    			<h4 className="menu-item">{this.props.menu.appetizers.item}......................................................................................ID</h4>
    			<p className="desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure vitae in, accusantium ipsum quo dicta, cum placeat laborum porro deserunt similique. Natus quas illum architecto repellat nesciunt sed perferendis. Velit.</p>
    		</div>
    		<div id="entrees">	
    			<h3> Entrees </h3>
    			<h4 className="menu-item">Menu Item......................................................................................ID</h4>
    			<p className="desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure vitae in, accusantium ipsum quo dicta, cum placeat laborum porro deserunt similique. Natus quas illum architecto repellat nesciunt sed perferendis. Velit.</p>
    		</div>
    		<div id="sides">
    			<h3> Sides </h3>
    			<h4 className="menu-item">Menu Item......................................................................................ID</h4>
    			<p className="desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure vitae in, accusantium ipsum quo dicta, cum placeat laborum porro deserunt similique. Natus quas illum architecto repellat nesciunt sed perferendis. Velit.</p>
    		</div>
    	</div>
    )
  }
})