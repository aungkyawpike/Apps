import React from 'react'
import { Card, Row, Col} from 'antd'
import ProductsStore from "../stores/ProductsStore"
import ApiActionsCreator from '../actionsCreators/ProductApiActionsCreator'

export default class Products extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			products: ProductsStore.getProducts()
		};
		ApiActionsCreator.getProducts();
	}

	componentWillMount = () => {
		ProductsStore.on('change', this.onStoreChange)
	}

	componentWillUnmount = () => {
		ProductsStore.removeListener('change', this.onStoreChange);
	}

	onStoreChange = () => {
		this.setState({
			products: JSON.parse(JSON.stringify(ProductsStore.getProducts()))
		});
	}

	handleGoDetail = (id) =>{
		this.props.history.push({pathname: `/app/productdetail/${id}`});
	}

	render() {
		return (
			<div>
				<Row id="products" type="flex" justify="start">​
					{ this.state.products &&
						this.state.products.map(product => (
								<Col xs={24} sm={12} md={8} lg={6} key={product._id} className="product" onClick={()=>this.handleGoDetail(product._id)}>
									<Card title={product.name} bordered={false}>
										<Row>
											<div><img src={`data:image/png;base64,${product.files[0].buffer}`} style={{width:'100%',height:'100%'}}/></div>
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
