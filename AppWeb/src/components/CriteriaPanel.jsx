import React from 'react'
import ReactDOM from 'react-dom'
import {Tabs, Tab} from 'material-ui/Tabs'
import ActionHome from 'material-ui/svg-icons/action/home'
import Filter from '../components/Filter'
import BusinessCategories from '../components/BusinessCategories'
import Search from '../components/Search'

export default class CriterialPanel extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			selectedBusiness: this.props.selectedBusiness
		}
	}

	handleChangeSelectedBusiness = (selectedBusiness) => this.setState({selectedBusiness: selectedBusiness})

	render() {

		return (
			<Tabs value={this.state.selectedBusiness} onChange={this.handleChangeSelectedBusiness} className="container-fluid" contentContainerStyle={{height:500}}>
				<Tab icon={<ActionHome/>} title="Product" value="product">
					<BusinessCategories/>
					<Filter/>
					<Search/>
				</Tab>
				<Tab icon={<ActionHome/>} title="Service" value="service">
				</Tab>
				<Tab icon={<ActionHome/>} title="Job" value="job">
				</Tab>
				<Tab icon={<ActionHome/>} title="Property" value="property">
				</Tab>
				<Tab icon={<ActionHome/>} title="Automobile"value="automobile">
				</Tab>
			</Tabs>
		)
	}
}
