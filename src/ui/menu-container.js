import React from "react";
import Menu from "ui/menu";
import { getMenu } from "api/data";

export default React.createClass({
	getInitialState: function (){
		return {
			menus: {}
		}
	}
})