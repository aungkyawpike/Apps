import React from 'react';
import ReactDOM from "react-dom";
import FlatButton from 'material-ui/FlatButton';
import { Link, browserHistory } from 'react-router'
import ProductCriteriaPanel from './ProductCriteriaPanel'
import { Menu, Icon } from 'antd'

export default class PlatformsMenu extends React.Component {

	constructor(props) {
		super(props)
		browserHistory.push("#/productcriteriapanel")
	}

	render() {
		return (
			<Menu mode="horizontal">
				<Menu.Item>
					<Link to="/productcriteriapanel">Product</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/servicecriteriapanel">Service</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/jobcriteriapanel">Job</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/propertycriteriapanel">Property</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/automobilecriteriapanel">Automobile</Link>
				</Menu.Item>
			</Menu>
		)
	}
}
