import React from 'react'
import { Card, Row, Col} from 'antd'
import ProductsStore from "../stores/ProductsStore"
import * as actions from '../actions/Actions'
import { hashHistory } from 'react-router'

export default class Products extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			products: ProductsStore.getProducts()
		}
	}

	componentWillMount = () => {
		ProductsStore.on('change', this.onStoreChange)
	}

	componentWillUnmount = () => {
		ProductsStore.removeListener('change', this.onStoreChange);
	}

	onStoreChange = () => {
		this.state = {
			products: ProductsStore.getProducts()
		}
	}

	render() {
		return <div>{JSON.stringify(this.state.products)}</div>
	}
}
