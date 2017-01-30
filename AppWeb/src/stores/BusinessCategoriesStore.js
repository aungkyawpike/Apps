import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as util from "../util/webUtil"

class BusinessCategoriesStore extends EventEmitter {

	constructor() {
		super()
		this.businessCategories = []
		this.storeDispatcherId = dispatcher.register(this.handleActions)
		this.getBusinessCategoriesFromService()
	}

	getBusinessCategories = () => {
		return this.businessCategories
	}

	recievedBusinessCategories = (data) => {
		if (data != null) {
			this.businessCategories = data
			this.emit('change')
		}
	}

	getBusinessCategoriesFromService = (requestObj) => {
		//util.getServerData("getBusinessCategories",requestObj,this.recievedBusinessCategories)
		var responseBusinessCategories = {
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
											id: 3,
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
		this.recievedBusinessCategories(responseBusinessCategories)
	}

	handleActions = (action) => {
		if (action.type === 'GET_BUSINESS_CATEGORIES') {
			this.getBusinessCategoriesFromService(action.data)
		}
	}

}

export default new BusinessCategoriesStore()

