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

	getProductsFromService = async (requestObj) => {
		try {
			this.products = await api.accessServerDataAsync("/api/products", requestObj, 'GET');
		}
		catch(e){
			console.log(e);
		}
	}

	handleActions = async (action) => {

		if (action.type === 'GET_PRODUCTS_FROM_SERVICE') {
			await this.getProductsFromService(action.data);
		}

		this.emit('change');
		return true;
	}

}

export default new ProductsStore()

