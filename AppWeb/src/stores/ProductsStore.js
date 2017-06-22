import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as api from "../api/API"

class ProductsStore extends EventEmitter {

	constructor() {
		super();
		this.products = [];
		this.storeDispatcherToken = dispatcher.register(this.handleActions);
	}

	getProducts = () => {
		return this.products;
	}

	getProductById = (_id) => {
		return this.products.find(p => p._id === _id);
	}

	addProduct = (product) => {
		this.products.push(product);
	}

	handleActions = async (action) => {
		if (action.type === 'RECIEVED_PRODUCTS_FROM_API') {
			if(action.response.ok){
				this.products = action.response.data;
				this.emit('change');
			}
		}
		return true;
	}

}

export default new ProductsStore()

