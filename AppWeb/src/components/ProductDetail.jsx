import React from 'react'
import { Card, Row, Col} from 'antd'
import ProductsStore from "../stores/ProductsStore"
import * as actions from '../actions/Actions'

export default class ProductDetail extends React.Component {

	constructor(props) {
		super(props)
		this.product = ProductsStore.getProductyById(parseInt(this.props.params.id))
	}

	render() {
		return (
			<div>
				<Row type="flex" justify="start">​
					<Col xs={24} sm={12} md={8} lg={6}>
						{ this.product &&
						(<Card key={this.product.id} title={this.product.name} bordered={false}>
							<Row>
								<div><img src={this.product.images[0]} style={{width:'100%',height:'100%'}}/></div>
							</Row>
							<Row>
								<div>{this.product.description}</div>
							</Row>
							<Row>
								<div>{this.product.price}</div>
							</Row>
						</Card>)
						}
					</Col>
				</Row>
			</div>
		)
	}
}
