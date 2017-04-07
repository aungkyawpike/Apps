import React from 'react'
import {Select,Input,Radio,Upload,Icon,message,Row,Col,Button} from 'antd'
import { hashHistory } from 'react-router'
import ProductsStore from "../stores/ProductsStore"
import * as actions from '../actions/Actions'
import Category from './Category'
import CreateProduct from'./CreateProduct'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"
const Dragger = Upload.Dragger
const validate = validate

export default class Create extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedPlatform: 'product',
			selectedCategory: undefined,
			categories: PlatformsCategoriesStore.getPlatformsCategories()['product'],
		}
	}

	handlePlatformsChange = (value) => {
		this.setState({
			selectedPlatform: value,
			categories:PlatformsCategoriesStore.getPlatformsCategories()[value],
		})
	}

	handleCategoryChange = (value) => {
		this.setState({
			selectedCategory: value
		})
	}

	handleConditionChange = (value) => {
		this.setState({
			condition : value
		});
	}


	render() {
		return (
			<div>
				<Row>
					<Col xs={6} sm={6} md={2} lg={2}>
						<div>Platforms</div>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12}>
						<Select defaultValue="product" style={{ width: '100%' }} onChange={this.handlePlatformsChange}>
							<Option value="product">Product</Option>
							<Option value="service">Service</Option>
						</Select>
					</Col>
				</Row>
				<Row>
					<Col xs={6} sm={6} md={2} lg={2}>
						<div>Category</div>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12}>
						<Category
							selectedCategory={this.state.selectedCategory}
							categories={this.state.categories}
							handleCategory={this.handleCategoryChange}
						/>
					</Col>
				</Row>
				<CreateProduct/>
			</div>
		)
	}
}
