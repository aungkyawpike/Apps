import dispatcher from "../dispatcher/dispatcher";
import * as api from "../api/API"

class PlatformsCategoriesApiActionsCreator {

	getMockPlatformsCategoriesFromService = () => {
		return {
			product: [
				{
					id: 1,
					name: "Electrics",
					subCategories: [
						{
							id: 2,
							name: "Mobiles & Tablets",
							subCategories: [
								{
									id: 3,
									name: "Power Bank",
									subCategories: [
										{
											id: 7,
											name: "Mi",
											subCategories: []
										}
									]
								}
							]
						}
					]
				},
				{
					id: 4,
					name: "Women's Fashion",
					subCategories: [
						{
							id: 5,
							name: "Shoes",
							subCategories: [
								{
									id: 6,
									name: "Heels",
									subCategories: []
								}
							]
						}
					]
				}
			],
			service: [
				{
					id: 1001,
					name: "Graphics & Design",
					subCategories: [
						{
							id: 1002,
							name: "Logo Design",
							subCategories: []
						}
					]
				},
				{
					id: 1003,
					name: "Digital Marketing",
					subCategories: [
						{
							id: 1004,
							name: "Social Media Marketing",
							subCategories: []
						}
					]
				}
			],
			job: [],
			property: [],
			automobile: []
		}
	}

	getPlatformsCategories = async (requestObj) => {

		dispatcher.dispatch({type:"WILL_GET_PLATFORMS_CATEGORIES_FROM_API", data: {}});

		try {
			//const platformsCategories = await api.accessServerDataAsync("/api/platformsCategories", requestObj, 'GET');
			const platformsCategories = this.getMockPlatformsCategoriesFromService();
			const response = {
				ok : true,
				data : platformsCategories
			}
			dispatcher.dispatch({type:"RECIEVED_PLATFORMS_CATEGORIES_FROM_API", response: response});
			console.log("RECIEVED_PLATFORMS_CATEGORIES_FROM_API - " + response);
		}
		catch(e){
			dispatcher.dispatch({type:"RECIEVED_PLATFORMS_CATEGORIES_FROM_API", data: e});
			const response = {
				ok : false,
				data : e
			}
			console.log("Error RECIEVED_PLATFORMS_CATEGORIES_FROM_API -" + response);
		}

	}

}

export default new PlatformsCategoriesApiActionsCreator();
