import React from 'react';
import { Link, hashHistory } from 'react-router'
import ProductCriteriaPanel from './ProductsCriteriaPanel'
import { Menu, Icon } from 'antd'
import * as actions from '../actions/Actions'

export default class PlatformsMenu extends React.Component {

	constructor(props) {
		super(props)
		actions.getPlatformsCategoriesFromService()
	}

	componentWillMount = () => {
		hashHistory.push("/productscriteriapanel")
	}

	render() {
		return (
			<Menu mode="horizontal">
				<Menu.Item>
					<Link to="/productscriteriapanel">Product</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/servicescriteriapanel">Service</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/jobscriteriapanel">Job</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/propertiescriteriapanel">Property</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/automobilescriteriapanel">Automobile</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/create">Create</Link>
				</Menu.Item>
			</Menu>
		)
	}
}
