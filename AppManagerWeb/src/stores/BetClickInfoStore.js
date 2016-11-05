import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as Util from "../Util/webUtil"

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
            "MatchId":2061751,
            "SportId":0,
            "IsBetOpen":true,
            "IsBetPause":false,
            "IsParlayMatch":false,
            "IsRemovedFromParlayList":false,
            "IsRBMatch":false,
            "IsHome":true,
            "Currency":"MYR",
            "OddsType":2,
            "BetInfoOddsTypeString":"MALAY",
            "MinStake":6.0000,
            "MaxStake":6549.9895200167679731712,
            "MaxPayout":13099.9790400335359463424,
            "ParlayMinStake":6.0000,
            "ParlayMaxStake":26100.0000,
            "ParlayMaxPayout":157199.75,
            "BetType":1,
            "BetTypeDesc":"FT - Handicap",
            "LeagueName":"Portugal Super Liga",
            "HomeTeamName":"Sporting Clube de Braga",
            "AwayTeamName":"GD Chaves",
            "HomeScore":0,
            "AwayScore":0,
            "Selection":1,
            "SelectionORTeamId":null,
            "BetOnDesc":"GD Chaves",
            "Handicap":0.75,
            "FormattedHandicap":"+0.75",
            "Odds":-0.99,
            "CalculationModel":1,
            "SeasonId":0,
            "VirtualSoccerMatchDay":0,
            "VirtualBasketballMatchDay":0,
            "Token":"59a4fabc-3831-442e-8aa9-f58aa03e40d3",
            "MemberCode":"bae01",
            "CompanyId":85,
            "GroupColorSpread":0.0000
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