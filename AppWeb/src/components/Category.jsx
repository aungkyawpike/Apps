import React from 'react'
import { TreeSelect} from 'antd'

export default class Category extends React.Component {

	constructor(props) {
		super(props)
	}

	recursiveProcess = (dataList, subDataListName, listItems)=> {
		for (var dataItem of dataList) {
			let nestedListItems = []
			if (dataItem[subDataListName].length > 0) {
				this.recursiveProcess(dataItem[subDataListName], subDataListName, nestedListItems)
			}
			listItems.push({
				value: dataItem.id + '',
				key: dataItem.id,
				label: dataItem.name,
				children: nestedListItems
			})
		}
	}

	render() {
		let listItems = []
		this.recursiveProcess(this.props.categories, 'subCategories', listItems)
		return (
			<TreeSelect
				style={{ width: '100%' }}
				value={this.props.selectedCategory}
				dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
				treeData={listItems}
				placeholder="Please select"
				onChange={this.props.handleCategory}
			/>
		)
	}
}
