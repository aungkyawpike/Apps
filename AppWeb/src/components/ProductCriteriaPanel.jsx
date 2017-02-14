import React from 'react'
import ReactDOM from 'react-dom'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import TreeSelect from 'uxcore-tree-select'
import '!style!css!uxcore/assets/iconfont.css'
import '!style!css!uxcore/assets/orange.css'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"

function generateData(x = 3, y = 2, z = 1, gData = []) {
	// x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
	function _loop(_level, _preKey, _tns) {
		const preKey = _preKey || '0';
		const tns = _tns || gData;

		const children = [];
		for (let i = 0; i < x; i++) {
			const key = `${preKey}-${i}`;
			tns.push({label: `${key}-label`, value: `${key}-value`, key, disabled: key === '0-0-0-1' ? true : false});
			if (i < y) {
				children.push(key);
			}
		}
		if (_level < 0) {
			return tns;
		}
		const __level = _level - 1;
		children.forEach((key, index) => {
			tns[index].children = [];
			return _loop(__level, key, tns[index].children);
		});
	}
	_loop(z);
	return gData;
}

let gData = generateData()

export default class ProductCriteriaPanel extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			search: [],
			inputValue: '0-0-0-label',
			value: '0-0-0-value',
			selectedProductCategory : 1,
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
		value : value
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
				<TreeSelect style={{width: 300}}
											dropdownStyle={{maxHeight: 200, overflow: 'auto'}}
											placeholder={<i>All Categories</i>}
											searchPlaceholder="please search"
											showSearch={false} allowClear treeLine={false}
											inputValue={this.state.inputValue}
											value={this.state.value}
											treeData={gData}
											treeNodeFilterProp="label"
											filterTreeNode={false}
											onChange={this.handleProductCategory} />
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
