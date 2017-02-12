import React from 'react'
import ReactDOM from 'react-dom'
import AutoComplete from 'material-ui/AutoComplete'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"

export default class ProductCriteriaPanel extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			searchKeyWord: [],
			productCategories: PlatformsCategoriesStore.getPlatformsCategories()['product']
		}
	}

	componentWillMount = () => {
		PlatformsCategoriesStore.on('change', this.onChange)
	}

	componentWillUnmount = () => {
		PlatformsCategoriesStore.removeListener('change', this.onChange);
	}

	handleSearchInput = (text) => {
		this.setState({searchKeyWord: [text]})
	}

	onChange = () => {
		this.state = {
			platformsCategories: PlatformsCategoriesStore.getPlatformsCategories()[this.props.params.selectedPlatform]
		}
	}

	render() {
		return (
			<div>
				<AutoComplete
					hintText="Search"
					dataSource={this.state.searchKeyWord}
					onUpdateInput={this.handleUpdateInput}
					floatingLabelText="Search"
					fullWidth={true}
				/>
				{this.props.children}
			</div>
		)
	}

}
