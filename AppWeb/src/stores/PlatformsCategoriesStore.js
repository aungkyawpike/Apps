import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as actions from '../actions/Actions'
import * as util from "../util/Util"

class PlatformsCategoriesStore extends EventEmitter {

	constructor() {
		super()
		this.platformsCategories = []
		this.storeDispatcherToken = dispatcher.register(this.handleActions)
	}

	getPlatformsCategories = () => {
		return this.platformsCategories
	}

	recievedPlatformsCategories = (data) => {
		if (data != null) {
			this.platformsCategories = data
		}
	}

	getPlatformsCategoriesFromService = (requestObj) => {
		//util.getServerData("getPlatformsCategories",requestObj,this.recievedPlatformsCategories)
		var responsePlatformsCategories = {
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
		this.recievedPlatformsCategories(responsePlatformsCategories)
	}

	handleActions = (action) => {
		if (action.type === 'GET_PLATFORMS_CATEGORIES_FROM_SERVICE') {
			this.getPlatformsCategoriesFromService(action.data)
		}
		else{
			return true
		}

		this.emit('change')
		return true
	}

}

export default new PlatformsCategoriesStore()

