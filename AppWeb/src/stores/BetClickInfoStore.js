import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as Util from "../util/webUtil"

class BetClickInfoStore extends EventEmitter {

	constructor(){
		super()
		this.BetClickInfos = []
		this.getBetClickInfos = this.getBetClickInfos.bind(this)
		this.recievedBetClickInfos = this.recievedBetClickInfos.bind(this)
		this.getBetClickInfosFromService = this.getBetClickInfosFromService.bind(this)
		this.handleActions = this.handleActions.bind(this)
		dispatcher.register(this.handleActions)
	}

    getBetClickInfos() {
        return this.BetClickInfos
    }

    recievedBetClickInfos(data){
        if(data != null){
            this.BetClickInfos[0] = data
            this.emit('change')
        }
    }

    getBetClickInfosFromService(requestObj) {
        //Util.getAsyncData("GetBetInfo",requestObj,this.recievedBetClickInfos)
        var responseBetClickInfoObj = {

        }
        this.recievedBetClickInfos(responseBetClickInfoObj)
    }

    handleActions(action) {
        if (action.type === 'BET_CLICK') {
            this.getBetClickInfosFromService(action.data)
        }
    }

}

export default new BetClickInfoStore
