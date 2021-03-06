import React from 'react'
import { Card, Form, TreeSelect, Input, Row, Col, Select, Button} from 'antd'
//import 'antd/lib/tree-select/style/css'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"
import Category from './Category'
import ProductApiActionsCreator from '../actionsCreators/ProductApiActionsCreator'
import PlatformsCategoriesApiActionsCreator from '../actionsCreators/PlatformsCategoriesApiActionsCreator'
const InputGroup = Input.Group
const Option = Select.Option
const FormItem = Form.Item

export default class ProductsCriteriaPanel extends React.Component {

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
		this.numberReg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
		PlatformsCategoriesApiActionsCreator.getPlatformsCategories();
	}

	componentWillMount = () => {
		PlatformsCategoriesStore.on('change', this.onStoreChange)
	}

	componentWillUnmount = () => {
		PlatformsCategoriesStore.removeListener('change', this.onStoreChange);
	}

	onStoreChange = () => {
		this.state = {
			platformsCategories: PlatformsCategoriesStore.getPlatformsCategories()[this.props.params.selectedPlatform]
		}
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
		if ((!isNaN(value) && this.numberReg.test(value)) || value === '' || value === '-') {
			this.setState({
				minPrice: value
			})
		}
	}

	handleMaxPrice = (event) => {
		const value = event.target.value;
		if ((!isNaN(value) && this.numberReg.test(value)) || value === '' || value === '-') {
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

	handleFormSubmit = ()=> {
		const requestObj = {
			search: this.state.search,
			selectedProductCategory: this.state.selectedProductCategory,
			minPrice: this.state.minPrice,
			maxPrice: this.state.maxPrice,
			condition: this.state.condition
		}
		ProductApiActionsCreator.getProducts(requestObj);
		this.props.history.push({pathname: `/app/products/`});
	}

	render() {
		return (
			<Card>
				<Form>
					<FormItem label="Search">
						<Row type="flex" justify="start">
							<Col xs={24} sm={16} md={10} lg={10}>
								<Input placeholder="Search" value={this.state.search} onChange={this.handleSearch}/>
							</Col>
						</Row>
					</FormItem>
					<FormItem label="Product Category">
						<Row type="flex" justify="start">
							<Col xs={24} sm={16} md={10} lg={10}>
								<Category
									selectedCategory={this.state.selectedProductCategory}
									categories={this.state.productCategories}
									handleCategory={this.handleProductCategory}
								/>
							</Col>
						</Row >
					</FormItem>
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
					<FormItem>
						<Row type="flex" justify="start">
							<Col xs={24} sm={16} md={10} lg={10}>
								<Button type="primary" onClick={this.handleFormSubmit}>Go</Button>
							</Col>
						</Row>
					</FormItem>
					{this.props.children}
				</Form>
			</Card>
		)
	}

}
