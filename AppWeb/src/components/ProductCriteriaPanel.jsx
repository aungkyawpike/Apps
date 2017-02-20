import React from 'react'
import ReactDOM from 'react-dom'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { TreeSelect } from 'antd'
const TreeNode = TreeSelect.TreeNode
import 'antd/lib/tree-select/style/css'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"

export default class ProductCriteriaPanel extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			search: [],
			inputValue: '0-0-0-label',
			value: '0-0-0-value',
			selectedProductCategory: 1,
			minPrice: '',
			maxPrice: '',
			condition: "All",
			productCategories: PlatformsCategoriesStore.getPlatformsCategories()['product']
		}
	}

	componentWillMount = () => {
		PlatformsCategoriesStore.on('change', this.onStoreChange)
	}

	componentWillUnmount = () => {
		PlatformsCategoriesStore.removeListener('change', this.onStoreChange);
	}

	handleSearch = (text) => {
		this.setState({search: [text]})
	}

	handleMinPrice = (event) => {
		this.setState({
			minPrice: event.target.value
		});
	}

	handleMaxPrice = (event) => {
		this.setState({
			maxPrice: event.target.value
		});
	}

	handleCondition = (event, index, value) => {
		this.setState({
			condition: value
		})
	}

	handleProductCategory = (value) => this.setState({
		value: value
	})

	onStoreChange = () => {
		this.state = {
			platformsCategories: PlatformsCategoriesStore.getPlatformsCategories()[this.props.params.selectedPlatform]
		}
	}

	render() {
		return (
			<div>
				<AutoComplete
					hintText="Search"
					dataSource={this.state.search}
					onUpdateInput={this.handleSearch}
					fullWidth={true}
				/>
				<TreeSelect
					showSearch
					style={{ width: 300 }}
					value={this.state.value}
					dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
					placeholder="Please select"
					allowClear
					treeDefaultExpandAll
					onChange={this.handleProductCategory}
				>
					<TreeNode value="parent 1" title="parent 1" key="0-1">
						<TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
							<TreeNode value="leaf1" title="my leaf" key="random"/>
							<TreeNode value="leaf2" title="your leaf" key="random1"/>
						</TreeNode>
						<TreeNode value="parent 1-1" title="parent 1-1" key="random2">
							<TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3"/>
						</TreeNode>
					</TreeNode>
				</TreeSelect>
				<div>
					<TextField
						id="minPrice"
						hintText="Minimum Price"
						value={this.state.minPrice}
						onChange={this.handleMinPrice}
					/>
				</div>
				<div>
					<TextField
						id="maxPrice"
						hintText="Max Price"
						value={this.state.maxPrice}
						onChange={this.handleMaxPrice}
					/>
				</div>
				<div>
					<DropDownMenu value={this.state.condition} onChange={this.handleCondition}>
						<MenuItem value={"All"} primaryText="All"/>
						<MenuItem value={"New"} primaryText="New"/>
						<MenuItem value={"Used"} primaryText="Used"/>
					</DropDownMenu>
				</div>
				{this.props.children}
			</div>
		)
	}

}
