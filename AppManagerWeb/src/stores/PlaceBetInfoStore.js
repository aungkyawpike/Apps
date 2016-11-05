import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as Util from "../Util/webUtil"

class PlaceBetInfoStore extends EventEmitter {

    constructor(){
        super()
        this.PlaceBetInfos = []
        this.getPlaceBetInfos = this.getPlaceBetInfos.bind(this)
        this.recievedPlaceBetInfos = this.recievedPlaceBetInfos.bind(this)
        this.getPlaceBetInfosFromService = this.getPlaceBetInfosFromService.bind(this)
        this.handleActions = this.handleActions.bind(this)
        dispatcher.register(this.handleActions)
    }
    
    getPlaceBetInfos() {
        return this.PlaceBetInfos
    }
    
    recievedPlaceBetInfos(data){ 
        if(data != null){
            this.PlaceBetInfos[0] = data
            this.emit('change')
        }
    }

    getPlaceBetInfosFromService(requestObj) {
        //Util.getAsyncData("PlaceBet",requestObj,this.recievedPlaceBetInfos)
        var responseBetClickInfoObj = {betno: "123456", errorMsg: ""}
        this.recievedPlaceBetInfos(responseBetClickInfoObj)
    }

    handleActions(action) {
        if (action.type === 'PLACE_BET') {
            this.getPlaceBetInfosFromService(action.data)
        }
    }
} 

export default new PlaceBetInfoStore