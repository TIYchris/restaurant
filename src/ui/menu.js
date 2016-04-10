import React from 'react';

require('assets/styles/menu.scss');

function getAllergyText(item) {
    if (item.allergies === 1) {
        return "This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.";
    }

    return "This item does not contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.";
}

function getFavoriteText(item) {
    if (item.favorite === 1) {
        return "We have been doing this a long time and this item has become one of our favorites.";
    }

    return "Please let us know if this is one of your favorite items.";
}

function getSpiceyText(item) {
    if (item.spicey === 1) {
        return "This item is spicy, please handle with care and drink lots of water.";
    }

    return "This item is not spicy.";
}

function getVeganText(item) {
    if (item.vegan === 1) {
        return "This item contains no meat and has been prepared without the use of animal products.";
    }

    return "This item contains tasty animal parts.";
}

export default React.createClass({
  render: function () {
    return(
    	<div id="menu-container">
    		<span className="selection"> Our Dinner Selection... </span>
    		<div id="appetizers">
    			<h3> Appetizers </h3>
                {this.props.menu.appetizers.map(function(appetizer) {
                    return (
                        <div key={appetizer.id}>
                            <h4 className="menu-item">
                                {appetizer.item}
                                <span className="dots"></span>
                                {appetizer.price}
                            </h4>
                            <p className="desc"> {appetizer.description} </p>
                            <ul className="menuIcons">
                                <li className="allergyIcon fontawesome-warning-sign">
                                    <div className="allergyHover">
                                        <div className="allergyHoverTriangle"></div>
                                        <p className="allergyTitle">Allergy Info</p> 
                                        <p className="allergyBody">{getAllergyText(appetizer)}</p>
                                    </div>
                                </li>
                                <li className="favoriteIcon fontawesome-star-empty">
                                    <div className="favoriteHover">
                                        <div className="favoriteHoverTriangle"></div>
                                        <p className="favoriteTitle">Favorites</p> 
                                        <p className="afavoriteBody">{getFavoriteText(appetizer)}</p>
                                    </div>
                                </li>
                                <li className="spiceyIcon fontawesome-fire">
                                    <div className="spiceyHover">
                                        <div className="spiceyHoverTriangle"></div>
                                        <p className="spiceyTitle">Spicey</p> 
                                        <p className="spiceyBody">{getSpiceyText(appetizer)}</p>
                                    </div>
                                </li>
                                <li className="veganIcon fontawesome-heart-empty">
                                    <div className="veganHover">
                                        <div className="veganHoverTriangle"></div>
                                        <p className="veganTitle">Vegan</p> 
                                        <p className="veganBody">{getVeganText(appetizer)}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
    		</div>
    		<div id="entrees">	
    			<h3> Entrees </h3>
    			{this.props.menu.entrees.map(function(entree) {
                    return (
                        <div key={entree.id}>
                            <h4 className="menu-item">
                                {entree.item}
                                <span className="dots"></span>
                                {entree.price}
                            </h4>
                            <p className="desc"> {entree.description} </p>
                            <ul className="entreesIcons">
                                <li className="allergyIcon fontawesome-warning-sign">
                                    <div className="allergyHover">
                                        <div className="allergyHoverTriangle"></div>
                                        <p className="allergyTitle">Allergy Info</p> 
                                        <p className="allergyBody">{getAllergyText(entree)}</p>
                                    </div>
                                </li>
                                <li className="favoriteIcon fontawesome-star-empty">
                                    <div className="favoriteHover">
                                        <div className="favoriteHoverTriangle"></div>
                                        <p className="favoriteTitle">Favorites</p> 
                                        <p className="afavoriteBody">{getFavoriteText(entree)}</p>
                                    </div>
                                </li>
                                <li className="spiceyIcon fontawesome-fire">
                                    <div className="spiceyHover">
                                        <div className="spiceyHoverTriangle"></div>
                                        <p className="spiceyTitle">Spicey</p> 
                                        <p className="spiceyBody">{getSpiceyText(entree)}</p>
                                    </div>
                                </li>
                                <li className="veganIcon fontawesome-heart-empty">
                                    <div className="veganHover">
                                        <div className="veganHoverTriangle"></div>
                                        <p className="veganTitle">Vegan</p> 
                                        <p className="veganBody">{getVeganText(entree)}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
    		<div id="sides">
    			<h3> Sides </h3>
                {this.props.menu.sides.map(function(side) {
                    return (
                        <div key={side.id}>
                            <h4 className="menu-item">
                                {side.item}
                                <span className="dots"></span>
                                {side.price}
                            </h4>
                            <p className="desc"> {side.description} </p>
                            <ul className="sideIcons">
                                <li className="allergyIcon fontawesome-warning-sign">
                                    <div className="allergyHover">
                                        <div className="allergyHoverTriangle"></div>
                                        <p className="allergyTitle">Allergy Info</p> 
                                        <p className="allergyBody">{getAllergyText(side)}</p>
                                    </div>
                                </li>
                                <li className="favoriteIcon fontawesome-star-empty">
                                    <div className="favoriteHover">
                                        <div className="favoriteHoverTriangle"></div>
                                        <p className="favoriteTitle">Favorites</p> 
                                        <p className="afavoriteBody">{getFavoriteText(side)}</p>
                                    </div>
                                </li>
                                <li className="spiceyIcon fontawesome-fire">
                                    <div className="spiceyHover">
                                        <div className="spiceyHoverTriangle"></div>
                                        <p className="spiceyTitle">Spicey</p> 
                                        <p className="spiceyBody">{getSpiceyText(side)}</p>
                                    </div>
                                </li>
                                <li className="veganIcon fontawesome-heart-empty">
                                    <div className="veganHover">
                                        <div className="veganHoverTriangle"></div>
                                        <p className="veganTitle">Vegan</p> 
                                        <p className="veganBody">{getVeganText(side)}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
    	</div>
    )
  }
})