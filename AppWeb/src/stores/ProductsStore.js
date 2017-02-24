import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as util from "../util/Util"


class ProductsStore extends EventEmitter {

	constructor() {
		super()
		this.products = []
		this.storeDispatcherToken = dispatcher.register(this.handleActions)
	}

	getProducts = () => {
		return this.products
	}

	recievedProducts = (data) => {
		if (data != null) {
			this.products = data
		}
	}

	getProductsFromService = (requestObj) => {
		//util.getServerData("getProducts",requestObj,this.recievedProducts)
		var responseProducts = {
			products: [
				{
					id: 1,
					name: "Product1",
					price: 1000
				},
				{
					id: 2,
					name: "Product2",
					price: 2000
				}
			]
		}
		this.recievedProducts(responseProducts)
	}

	handleActions = (action) => {
		if (action.type === 'GET_PRODUCTS_FROM_SERVICE') {
			this.getProductsFromService(action.data)
		}
		else {
			return true
		}

		this.emit('change')
		return true
	}

}

export default new ProductsStore()

