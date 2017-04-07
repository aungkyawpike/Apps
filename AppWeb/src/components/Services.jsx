import React from 'react'
import { Card, Row, Col} from 'antd'
import { hashHistory } from 'react-router'
import ProductsStore from "../stores/ProductsStore"
import * as actions from '../actions/Actions'

export default class Services extends React.Component {

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

	handleGoDetail = (id) =>{
		hashHistory.push("/productdetail/" + id)
	}

	render() {
		return (
			<div>
				<Row type="flex" justify="start">​
					{
						this.state.products.map(product => (
								<Col xs={24} sm={12} md={8} lg={6} key={product.id} onClick={()=>this.handleGoDetail(product.id)}>
									<Card title={product.name} bordered={false}>
										<Row>
											<div><img src={product.images[0]} style={{width:'100%',height:'100%'}}/></div>
										</Row>
										<Row>
											<div>{product.description}</div>
										</Row>
										<Row>
											<div>{product.price}</div>
										</Row>
									</Card>
								</Col>
							)
						)
					}
				</Row>
			</div>
		)
	}
}
