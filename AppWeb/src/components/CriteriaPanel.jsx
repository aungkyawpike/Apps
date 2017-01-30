import React from 'react'
import ReactDOM from 'react-dom'
import {Tabs, Tab} from 'material-ui/Tabs'
import ActionHome from 'material-ui/svg-icons/action/home'
import Filter from '../components/Filter'
import BusinessCategories from '../components/BusinessCategories'
import Search from '../components/Search'

export default class CriteriaPanel extends React.Component {

	constructor(props) {
		super(props)
		this.currentPath = this.props.location.pathname.split('/')[2]
		this.state = {
			selectedBusiness: this.props.params.selectedBusiness
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.currentPath !== nextProps.location.pathname.split('/')[2]){ //the route has changed
			this.currentPath = nextProps.location.pathname.split('/')[2];
			this.setState({ selectedBusiness : nextProps.params.selectedBusiness })
		}
	}

	render() {

		return (
			<div>
				<BusinessCategories selectedBusiness={this.state.selectedBusiness}/>
				<Filter selectedBusiness={this.state.selectedBusiness}/>
				<Search/>
				{this.props.children}
			</div>
		)
	}

}
