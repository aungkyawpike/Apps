import React from 'react'
import ReactDOM from 'react-dom'
import Filter from '../components/Filter'
import NestedList from '../components/NestedList'
import Search from '../components/Search'
import BusinessCategoriesStore from "../stores/BusinessCategoriesStore"

export default class CriteriaPanel extends React.Component {

	constructor(props) {
		super(props)
		this.currentPath = this.props.location.pathname.split('/')[2]
		this.state = {
			businessCategories: BusinessCategoriesStore.getBusinessCategories(),
			selectedBusiness: this.props.params.selectedBusiness
		}
		this.state.nestedListData = {
			selectedBusiness: this.state.selectedBusiness,
			selectedDataItem : '',
			dataList : this.state.businessCategories[this.state.selectedBusiness],
			subDataListName : 'subCategories'
		}
	}

	componentWillMount = () => {
		BusinessCategoriesStore.on('change', this.onChange)
	}

	componentWillUnmount = () => {
		BusinessCategoriesStore.removeListener('change', this.onChange);
	}

	onChange = () => {
		this.state = {
			businessCategories: BusinessCategoriesStore.getBusinessCategories()
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.currentPath !== nextProps.location.pathname.split('/')[2]){ //the route has changed
			this.currentPath = nextProps.location.pathname.split('/')[2]
			let selectedBusiness = nextProps.params.selectedBusiness
			let newNestedListData = Object.assign({},this.state.nestedListData)
			newNestedListData.selectedBusiness = selectedBusiness
			newNestedListData.dataList = this.state.businessCategories[selectedBusiness]
			this.setState({
				selectedBusiness : selectedBusiness,
				nestedListData : newNestedListData
			})
		}
	}

	render() {

		return (
			<div>
				<Search/>
				<NestedList nestedListData={this.state.nestedListData}/>
				<Filter selectedBusiness={this.state.selectedBusiness}/>
				{this.props.children}
			</div>
		)
	}

}
