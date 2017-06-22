import dispatcher from "../dispatcher/dispatcher";
import * as api from "../api/API"

class ProductApiActionsCreator {

	getProducts = async (requestObj) => {
		dispatcher.dispatch({type:"WILL_GET_PRODUCTS_FROM_API", data: {}});
		try {
			const products = await api.accessServerDataAsync("/api/products", requestObj, 'GET');
			const response = {
				ok : 1,
				data : products
			}
			dispatcher.dispatch({type:"RECIEVED_PRODUCTS_FROM_API", response: response});
			console.log("RECIEVED_PRODUCTS_FROM_API -" + response);
		}
		catch(e){
			dispatcher.dispatch({type:"RECIEVED_PRODUCTS_FROM_API", data: e});
			const response = {
				ok : 0,
				data : e
			}
			console.log("Error RECIEVED_PRODUCTS_FROM_API -" + response);
		}
	}

}

export default new ProductApiActionsCreator();
