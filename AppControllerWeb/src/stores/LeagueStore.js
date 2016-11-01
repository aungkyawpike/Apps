import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import CriteriaStore from "./CriteriaStore"
import * as Util from "../Util/webUtil"
import OddsUtil from "../Util/OddsUtil"
import LeagueAction from "../actions/LeagueAction"
import * as OddsConst from "../Util/OddsConst"
import Immutable, { List, Map } from 'immutable'; 
import HubClient from "../stores/HubClient"
import { MatchStore } from "./MatchStore" 
import {PushDataProcessor} from "../Util/PushDataProcessor"



class LeagueStore extends EventEmitter {

	constructor(){
        super()
		//this.gotLeagueMatches = this.gotLeagueMatches.bind(this)
		this.setSelectedLeague = this.setSelectedLeague.bind(this)
		this.processPushData = this.processPushData.bind(this)
		this.getIndexMatches = this.getIndexMatches.bind(this)
		this.promiseReturn = this.promiseReturn.bind(this)
		this.League = {}
		this.matchStore
		this.PushDataProcessor


		this.criteria = CriteriaStore.getCriteria()
		this.state = {
            criteria: this.criteria,
            League : {},
            SelectedLeague : -1
        }

		Util.getAsyncData("GetOddsData2",this.criteria, this.promiseReturn.bind(this))
		
		HubClient.initialize(() => HubClient.subscribe('/S45M2O0V2', this.processPushData))
		HubClient.subscribe('/S45M2O0V2', this.processPushData)
	}

    get allLeagues() { return this.state.League }

    promiseReturn(result)
    {
        if(result != null){
            this.state.League = result
            this.matchStore = new MatchStore(this.state.League, this)
            this.PushDataProcessor = new PushDataProcessor(this)
            
        }
    }

	processPushData(data){

		console.log('push data received ') 
		console.log(data)

		if(data && Array.isArray(data) && data.length > 0)
		{
			console.log('empty data')
			return
		}

		this.processData(data)
		//this.PushDataProcessor.processData(data)

	}

	mockProcessData(data){

		if(data.type != 'MOCK_PUSH') return

		this.processData(data.data)
	}


	processData(data){


		if (data.Type == OddsConst.RefreshAll) // Recieve when  Data Service Start and OddsDisplay Server Start Connect
		{
			console.log('refreshAll push')
		}
		else if (data.Type == OddsConst.RefreshTemplate) // Recieve when ReloadCompanyFeatures
		{
			console.log('RefreshTemplate push')
		}
		else if (data.Type == OddsConst.ClearAndRefreshPartial) // For League and TeamName , Match Date Change
		{
			console.log('ClearAndRefreshPartial push')
		}
		else if (data.Type == OddsConst.NewAndUpdateRefreshPartial) // New Matches and Zero Odds Matches
		{
			console.log('NewAndUpdateRefreshPartial push')
		}
		else if (data.Type == OddsConst.RefreshPartial) // Close Matches
		{

			this.partialUpdate(data)
		}
		else if(data.Type == OddsConst.ScreenUpdate) // MatchTime, Score, Red Card, Odds Update
		{
		    this.screenUpdate(data)
			
		}
		else (data.Type == OddsConst.SportUpdate)
		{
			console.log('SportUpdate push')
		}

	}

	partialUpdate(receivedData){

		var pd = receivedData.Data

	        	if(pd.CloseMatches && pd.CloseMatches.length > 0)
	        	{
					var l_idx = -1
					var m_idx = -1
					this.state.League.map((league, l_index) => {
						league.Matches.map((match, index) => {

							var foundMatch = null ;

							if(parseInt(match.MatchId) == pd.CloseMatches[0]){
								foundMatch = match
								l_idx = l_index
								m_idx = index
							}

							if(foundMatch){
								league.Matches = league.Matches.filter(m => m.MatchId !== foundMatch.MatchId)
								this.emit('change');
							}
						})
					})
	        	}

				if(pd.ZeroOddsMatches &&  pd.ZeroOddsMatches.length > 0)
				{
					console.log('')
				}

				if(pd.NewMatches &&  pd.NewMatches.length > 0)
				{
					console.log('')
				}

	}


	screenUpdate(receivedData){

	    var pushData = receivedData.Data

	    if(pushData && Array.isArray(pushData) && pushData.length > 0){

	        	pushData.map((pd) => {
	        		
			        if(pd.PushMessageType == OddsConst.MatchGeneralMsg)
			        {
			        		this.processOddsUpdate(pd)
			        }

	        	})
        

	    }


	}

	processOddsUpdate(pushData){

		if(this.state.League && this.state.League.length > 0)
		{

			var Leagues = this.state.League

			var selectLayout = Leagues.map((league) => {

				league.Matches.map((match) => {

					if(match.MatchId == pushData.MatchId){
						if(pushData.BetType == 1){

							var adjustedOdd = OddsUtil.adjustToCurrentOddsType(pushData, this.criteria.OddsType)

							match.OddsLines[0].FTAH.HomeOddsStr = adjustedOdd.HomeOdds
							match.OddsLines[0].FTAH.AwayOddsStr = adjustedOdd.AwayOdds
						}
					}

				})
			})

			console.log('Odds Update - processed' + pushData)

			this.emit('change')

		}

	}

	setSelectedLeague(leagueId){

		var selectedLeague = this.state.League.findIndex(function(x) { return x.LeagueId == leagueId})

		if(selectedLeague > -1){

			this.state.SelectedLeague = selectedLeague
			this.emit('change');

		}
		
	}

	findLeague2(leagueId) {

	  var test = element;
	  var test2 = index;
	  var test3 = array;


	}

	findLeague (index, value) {

		  console.log(index + ':' + value);
		  if(this.state.League[index].LeagueId == leagueId)
		  	this.selectedLeague = index

	}

    //gotLeagueMatches(data){ 

	//	if(data != null && data.length > 0){

	//		data.map(league => {
	//			league.Matches.map(match => {
	//				match['leagueId'] = league.LeagueId
	//				match['leagueName'] =  league.LeagueName
	//			})
	//		})

	//		this.state.League = data
	//		this.emit('change');
	//	}

	//} 

	getLeague(){

		return this.state.League

	}

	getSelectedLeague(){

		return this.state.SelectedLeague

	}

	getAllMatchesCount(){
		var matchCount = 0

		this.state.League.map((league) => {

			league.Matches.map((match) => {
				//console.log(match)
				if(match.GameTypeCode == 'SeriesWin')
					matchCount += 1
			})

		})

		return matchCount;

	}

	getAllMatches(){
	    return this.matchStore.allMatches;
	}

	getIndexMatches(){
	    return this.matchStore.getIndexMatches()
	}

	getAvailableIndexMatchesByRange(min, max){
	    return this.matchStore.getAvailableIndexMatchesByRange(min, max)
	}


	getAvailableIndexMatchesCount(){
	    return this.matchStore.getAvailableIndexMatchesCount()
	}


} 

var leagueStore = new LeagueStore
dispatcher.register(leagueStore.mockProcessData.bind(this));

export default leagueStore


