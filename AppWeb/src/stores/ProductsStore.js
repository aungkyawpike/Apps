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

	getProductyById = (id) => {
		return this.products.find(p => p.id === id)
	}

	recievedProducts = (data) => {
		if (data != null) {
			this.products = data
		}
	}

	getProductsFromService = (requestObj) => {
		//util.accessServerData("getProducts",requestObj,this.recievedProducts,'post')
		var responseProducts =
			[
				{
					id: 1,
					title: 'HTC',
					description: "HTC U Ultra Indigo Blue 4GB RAM 64GB ROM [Official Warranty] ",
					model: 'AB3242',
					images: ['http://sg-live-02.slatic.net/p/2/htc-u-ultra-indigo-blue-4gb-ram-64gb-rom-official-warranty-7248-08727521-da041f28b7bb3aa7adccb6bafab29886-product.jpg'],
					price: 1000,
					postOwner: {
						name: 'Mr. ABCD',
						email: 'abcd@gmail.com',
						phone: '+65995531231'
					}
				},
				{
					id: 2,
					description: "OnePlus 3T 6GB RAM 64GB Gunmetal (Export) ",
					model: 'PWW2232',
					images: ['http://sg-live-03.slatic.net/p/2/oneplus-3t-6gb-ram-64gb-gunmetal-export-9993-97923701-1071e78c140f64744c91086e40c1fd16-zoom.jpg'],
					price: 2000,
					postOwner: {
						name: 'Mr.IUUJK',
						email: 'iuujk@gmail.com',
						phone: '+6567567657'
					}
				},
				{
					id: 3,
					description: "OnePlus 3T 6GB RAM 64GB Gunmetal (Export) ",
					model: 'PWW2232',
					images: ['http://sg-live-03.slatic.net/p/2/oneplus-3t-6gb-ram-64gb-gunmetal-export-9993-97923701-1071e78c140f64744c91086e40c1fd16-zoom.jpg'],
					price: 2000,
					postOwner: {
						name: 'Mr.IUUJK',
						email: 'iuujk@gmail.com',
						phone: '+6567567657'
					}
				},
				{
					id: 4,
					description: "OnePlus 3T 6GB RAM 64GB Gunmetal (Export) ",
					model: 'PWW2232',
					images: ['http://sg-live-03.slatic.net/p/2/oneplus-3t-6gb-ram-64gb-gunmetal-export-9993-97923701-1071e78c140f64744c91086e40c1fd16-zoom.jpg'],
					price: 2000,
					postOwner: {
						name: 'Mr.IUUJK',
						email: 'iuujk@gmail.com',
						phone: '+6567567657'
					}
				},
				{
					id: 5,
					description: "OnePlus 3T 6GB RAM 64GB Gunmetal (Export) ",
					model: 'PWW2232',
					images: ['http://sg-live-03.slatic.net/p/2/oneplus-3t-6gb-ram-64gb-gunmetal-export-9993-97923701-1071e78c140f64744c91086e40c1fd16-zoom.jpg'],
					price: 2000,
					postOwner: {
						name: 'Mr.IUUJK',
						email: 'iuujk@gmail.com',
						phone: '+6567567657'
					}
				}
			]

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

