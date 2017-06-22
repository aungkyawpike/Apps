import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as api from "../api/API"

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

	handleActions = (action) => {
		if (action.type === 'RECIEVED_PLATFORMS_CATEGORIES_FROM_API') {
			if(action.response.ok){
				this.platformsCategories = action.response.data;
				this.emit('change');
			}
		}
		return true
	}

}

export default new PlatformsCategoriesStore()

