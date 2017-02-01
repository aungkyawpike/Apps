import React from 'react'
import ReactDOM from 'react-dom'
import Filter from '../components/Filter'
import NestedList from '../components/NestedList'
import Search from '../components/Search'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"

export default class CriteriaPanel extends React.Component {

	constructor(props) {
		super(props)
		this.currentPath = this.props.location.pathname.split('/')[2]
		this.state = {
			platformsCategories: PlatformsCategoriesStore.getPlatformsCategories(),
			selectedPlatforms: this.props.params.selectedPlatforms
		}
		this.state.nestedListData = {
			title: this.state.selectedPlatforms,
			selectedDataItem : '',
			dataList : this.state.platformsCategories[this.state.selectedPlatforms],
			subDataListName : 'subCategories'
		}
	}

	componentWillMount = () => {
		PlatformsCategoriesStore.on('change', this.onChange)
	}

	componentWillUnmount = () => {
		PlatformsCategoriesStore.removeListener('change', this.onChange);
	}

	onChange = () => {
		this.state = {
			platformsCategories: PlatformsCategoriesStore.getPlatformsCategories()
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.currentPath !== nextProps.location.pathname.split('/')[2]){ //the route has changed
			this.currentPath = nextProps.location.pathname.split('/')[2]
			let selectedPlatforms = nextProps.params.selectedPlatforms
			let newNestedListData = Object.assign({},this.state.nestedListData)
			newNestedListData.title = selectedPlatforms
			newNestedListData.dataList = this.state.platformsCategories[selectedPlatforms]
			this.setState({
				selectedPlatforms : selectedPlatforms,
				nestedListData : newNestedListData
			})
		}
	}

	render() {

		return (
			<div>
				<Search/>
				<NestedList nestedListData={this.state.nestedListData}/>
				<Filter/>
				{this.props.children}
			</div>
		)
	}

}
