import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as util from "../util/webUtil"

class CategoriesStore extends EventEmitter {

	constructor(){
		super()
		this.Categories = []
		this.storeDispatcherId = dispatcher.register(this.handleActions)
		this.getCategoriesFromService()
	}

    getCategories = () => {
        return this.Categories
    }

    recievedCategories= (data) => {
        if(data != null){
            this.Categories = data
            this.emit('change')
        }
    }

    getCategoriesFromService = (requestObj) =>{
        //util.getAsyncData("GetBetInfo",requestObj,this.recievedBetClickInfos)
        var responseCategories = [
					{
						id : 1,
						name : "Electrics",
						subCategories : [
							{
								id : 2,
								name : "Mobiles & Tablets",
								subCategories:[
									{
										id : 3,
									  name : "Power Bank",
										subCategories : []
								  }
								]
							}
						]
					},
					{
						id : 4,
						name : "Women's Fashion",
						subCategories : [
							{
								id : 5,
								name : "Shoes",
								subCategories:[
									{
										id : 6,
										name : "Heels",
										subCategories : []
									}
								]
							}
						]
					}
				]
        this.recievedCategories(responseCategories)
    }

    handleActions = (action) =>{
        if (action.type === 'BET_CLICK') {
            this.getBetClickInfosFromService(action.data)
        }
    }

}

export default new CategoriesStore
