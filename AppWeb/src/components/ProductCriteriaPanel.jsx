import React from 'react'
import ReactDOM from 'react-dom'
import { Card, Form, TreeSelect, Input,Row, Col, Select, InputNumber } from 'antd'
//import 'antd/lib/tree-select/style/css'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"
const InputGroup = Input.Group
const Option = Select.Option
const FormItem = Form.Item

export default class ProductCriteriaPanel extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			search: '',
			selectedProductCategory: undefined,
			minPrice: '',
			maxPrice: '',
			condition: "All",
			productCategories: PlatformsCategoriesStore.getPlatformsCategories()['product']
		}
		this.reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
	}

	componentWillMount = () => {
		PlatformsCategoriesStore.on('change', this.onStoreChange)
	}

	componentWillUnmount = () => {
		PlatformsCategoriesStore.removeListener('change', this.onStoreChange);
	}

	handleSearch = (event) => {
		this.setState({search: event.target.value})
	}

	handleProductCategory = (value) => {
		this.setState({
			selectedProductCategory: value
		})
	}

	handleMinPrice = (event) => {
		const value = event.target.value;
		if ((!isNaN(value) && this.reg.test(value)) || value === '' || value === '-') {
			this.setState({
				minPrice: value
			})
		}
	}

	handleMaxPrice = (event) => {
		const value = event.target.value;
		if ((!isNaN(value) && this.reg.test(value)) || value === '' || value === '-') {
			this.setState({
				maxPrice: value
			})
		}
	}

	handleCondition = (value) => {
		this.setState({
			condition: value
		})
	}

	onStoreChange = () => {
		this.state = {
			platformsCategories: PlatformsCategoriesStore.getPlatformsCategories()[this.props.params.selectedPlatform]
		}
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

		this.recursiveProcess(this.state.productCategories, 'subCategories', listItems)

		return (
			<Card>
				<Form>
					<FormItem label="Search">
						<Row type="flex" justify="start" align="middle">
							<Col xs={24} sm={16} md={10} lg={10}>
								<Input placeholder="Search" value={this.state.search} onChange={this.handleSearch}/>
							</Col>
						</Row>
					</FormItem>
					<FormItem label="Product Category">
						<Row type="flex" justify="start">
							<Col xs={24} sm={16} md={10} lg={10}>
								<TreeSelect
									style={{ width: '100%' }}
									value={this.state.selectedProductCategory}
									dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
									treeData={listItems}
									placeholder="Please select"
									onChange={this.handleProductCategory}
								/>
							</Col>
						</Row ></FormItem>
					<FormItem label="Price">
						<Row type="flex" justify="start">
							<Col xs={24} sm={16} md={10} lg={10}>
								<InputGroup compact>
									<Input placeholder="Min" style={{ width: '50%' }} value={this.state.minPrice}
												 onChange={this.handleMinPrice}/>
									<Input placeholder="Max" style={{ width: '50%' }} value={this.state.maxPrice}
												 onChange={this.handleMaxPrice}/>
								</InputGroup>
							</Col>
						</Row>
					</FormItem>
					<FormItem label="Condition">
						<Row type="flex" justify="start">
							<Col xs={24} sm={16} md={10} lg={10}>
								<InputGroup compact>
									<Select defaultValue="All" value={this.state.condition} onChange={this.handleCondition}>
										<Option value="All">All</Option>
										<Option value="New">New</Option>
										<Option value="Used">Used</Option>
									</Select>
								</InputGroup>
							</Col>
						</Row>
					</FormItem>
					{this.props.children}
				</Form>
			</Card>
		)
	}

}
