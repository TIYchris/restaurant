import React from 'react';

require('assets/styles/menu.scss');

export default React.createClass({
  render: function () {
    return(
    	<div id="menu-container">
    		<span className="selection"> Our Dinner Selection... </span>
    		<div id="appetizers">
    			<h3> Appetizers </h3>
                {this.props.menu.appetizers.map(function(appetizer) {
                    return (
                        <div>
                            <h4 key={menu.id}className="menu-item">{appetizer.item}.......................................{appetizer.price}</h4>
                            <p className="desc"> {appetizer.description} </p>
                            <ul className="menuIcons">
                                <li className="fontawesome-warning-sign"></li>
                                <li className="fontawesome-star-empty"></li>
                                <li className="fontawesome-fire"></li>
                                <li className="fontawesome-heart-empty"></li>
                            </ul>
                        </div>
                    )
                })}
    		</div>
    		<div id="entrees">	
    			<h3> Entrees </h3>
    			{this.props.menu.entrees.map(function(entrees) {
                    return (
                        <div>
                            <h4 key={menu.id}className="menu-item">{entrees.item}.......................................{entrees.price}</h4>
                            <p className="desc"> {entrees.description} </p>
                        </div>
                    )
                })}
            </div>
    		<div id="sides">
    			<h3> Sides </h3>
                {this.props.menu.sides.map(function(sides) {
                    return (
                        <div>
                            <h4 key={menu.id}className="menu-item">{sides.item}.......................................{sides.price}</h4>
                            <p className="desc"> {sides.description} </p>
                        </div>
                    )
                })}
            </div>
    	</div>
    )
  }
})