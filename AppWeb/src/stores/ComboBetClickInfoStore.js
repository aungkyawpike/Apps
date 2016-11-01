import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import * as Util from "../Util/webUtil"


/*
Existing Combo List (Not First Selection) - User Selected Non Exotic , User Selected Exotic

Different ExternalMatchId  -  Allowed , Allowed
Same ExternalMatchId, Different GameOrderIds -  Not Allowed, Allowed
Same ExternalMatchId, Same GameOrderIds - Not Allowed, Not Allowed
*/

class ComboBetClickInfoStore extends EventEmitter {

	constructor(){
		super()
		this.ComboBetClickInfos = []
		this.getComboBetClickInfos = this.getComboBetClickInfos.bind(this)
		this.recievedComboBetClickInfos = this.recievedComboBetClickInfos.bind(this)
		this.getComboBetClickInfosFromService = this.getComboBetClickInfosFromService.bind(this)
		this.handleActions = this.handleActions.bind(this)
		dispatcher.register(this.handleActions)
	}

    getComboBetClickInfos() {
        return this.ComboBetClickInfos
    }
    
    recievedComboBetClickInfos(data){ 
        if(data != null){
            this.ComboBetClickInfos = data
            this.emit('change')
        }
    }

    getComboBetClickInfosFromService(requestObj) {
        //Util.getAsyncData("GetComboBetInfos",requestObj,this.recievedComboBetClickInfos)
        var responseComboBetClickInfoObj = {
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
        this.recievedComboBetClickInfos(responseComboBetClickInfoObj)
    }

    handleActions(action) {
        if (action.type === 'Add_TO_COMBO_BET_CLICK') {
            
        }
        else if (action.type === 'COMBO_BET_CLICK') {
            this.getComboBetClickInfosFromService(action.data)
        }
    }
    
} 

export default new ComboBetClickInfoStore