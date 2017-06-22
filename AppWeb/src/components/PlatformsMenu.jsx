import React from 'react';
import { Link } from "react-router-dom"
import ProductCriteriaPanel from './ProductsCriteriaPanel'
import { Menu, Icon } from 'antd'
import ApiActionsCreator from '../actionsCreators/PlatformsCategoriesApiActionsCreator'

export default class PlatformsMenu extends React.Component {

	constructor(props) {
		super(props);
		var a = 1;
		ApiActionsCreator.getPlatformsCategories();
	}

	render() {
		return (
			<Menu mode="horizontal">
				<Menu.Item>
					<Link to="/app/productscriteriapanel">Product</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/app/servicescriteriapanel">Service</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/app/jobscriteriapanel">Job</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/app/propertiescriteriapanel">Property</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/app/automobilescriteriapanel">Automobile</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/app/create">Create</Link>
				</Menu.Item>
			</Menu>
		)
	}
}
