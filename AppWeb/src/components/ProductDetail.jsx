import React from 'react'
import { Card, Row, Col} from 'antd'
import ProductsStore from "../stores/ProductsStore"
import * as actions from '../actions/Actions'

export default class ProductDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			productId: this.props.match.params._id,
			product: ProductsStore.getProductById(this.props.match.params._id)
		};
	}

	componentWillMount = () => {
		ProductsStore.on('change', this.onStoreChange)
	}

	componentWillUnmount = () => {
		ProductsStore.removeListener('change', this.onStoreChange);
	}

	onStoreChange = () => {
		var obj = ({
			productId: this.props.match.params._id,
			product: ProductsStore.getProductById(this.props.match.params._id)
		});
		this.setState({
			products: JSON.parse(JSON.stringify(obj))
		});
	}

	render() {
		return (
			<div>
				<Row type="flex" justify="start">​
					<Col xs={24} sm={12} md={8} lg={6}>
						{ this.state.product &&
						(<Card key={this.state.product._id} title={this.state.product.name} bordered={false}>
							<Row>
								<div><img src={`data:image/png;base64,${this.state.product.files[0].buffer}`} style={{width:'100%',height:'100%'}}/></div>
							</Row>
							<Row>
								<div>{this.state.product.description}</div>
							</Row>
							<Row>
								<div>{this.state.product.price}</div>
							</Row>
						</Card>)
						}
					</Col>
				</Row>
			</div>
		)
	}
}
