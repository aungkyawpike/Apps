import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"

class CriteriaStore extends EventEmitter {


	constructor(){
		
		super()
		this.pageSportIds = 0;			
		this.pageMarket = 0;			
		this.sortType = 0;			
		this.oddsType = 0;			
		this.language = 0;			
		this.filterDay = 1.0;			
		this.openParlay = 0;			
		this.parlayMarketArray = [true, true, false];			
		this.extraFilter = '';			
		this.sportId = 0;			
		this.market = 0;			
		this.oddsPageCode = 0;			
		this.viewType = 0;			
		this.timeZones = -480;			
		this.theme = 0;			
		this.showStatistics = 0;			
		this.SMVUpcomingLimit = 0;			
		this.companyId = 45;			
		this.isUserLogin = false;			
		this.token = '';			
		this.memberCode = '';			
		this.currency = '';			
		this.memberGroupId = 1;			
		this.isBetTradeEnabled = false;			
		this.betTradeToken = '';			
		this.betTradeSiteId = '0';			
		this.betTradeSubscribeUrl = '';			
		this.betTradeSecurityToken = '';			
		this.acceptAnyOdds = false;			
		this.acceptHigherOdds = false;			
		this.seasonId = 0;			
		this.virtualSoccerMatchDay = 0;			
		this.virtualBasketballMatchDay = 0;			
		this.walletMode = 1;			
		this.walletBalanceDisplayEnabled = false;			
		this.walletBalanceRefreshInterval = 0;			
		this.walletCompanyGetBalanceUrl = '';			
		this.walletAccessKey = '';			
		this.vipSpread = 0;			
		this.memberVIPSpread = 0;			
		this.singleLeftPanelIdleTimeoutSeconds = 0;			
		this.parlayLeftPanelIdleTimeoutSeconds = 0;			
		this.sportFilter = 0;
		
	}

	getCriteria(){

	    return {
	       RequestInfo:{"SiteName":"","ServerIP":"192.168.11.162","RemoteIP":"::1"},
	       Token:null,
	       Currency:null,
	       MemberCode:null,
	       WalletMode:1,
	       WalletBalanceDisplayEnabled:false,
	       WalletBalanceRefreshInterval:0,
	       WalletCompanyGetBalanceUrl:null,
	       WalletAccessKey:null,
	       PageSportIds:[45],
	       PageMarket:2,
	       LeagueIdList:[-1],
	       SortingType:0,
	       OddsType:0,
	       UserTimeZone:-480,
	       Language:0,
	       FilterDay:-1.0,
	       OpenParlay:0,
	       ActiveMatchFilter:false,
	       Theme:1,
	       ShowStatistics:1,
	       IsUserLogin:false,
	       SMVUpcomingLimit:0,
	       ExtraFilter:null,
	       CompanyId:45,
	       MemberGroudId:1,
	       IsBetTradeEnabled:false,
	       BetTradeToken:"FF664688-CCC5-4048-81B5-283C87134B8E",
	       BetTradeSiteId:71,
	       BetTradeSubscribeUrl:"203.90.242.232:8705",
	       BetTradeSecurityToken:null,
	       AcceptAnyOdds:false,
	       AcceptHigherOdds:false,
	       SeasonId:0,
	       VirtualSoccerMatchDay:0,
	       VirtualBasketballMatchDay:0,
	       VIPSpread:0,
	       MemberVIPSpread:0,
	       SingleLeftPanelIdleTimeoutSeconds:30,
	       ParlayLeftPanelIdleTimeoutSeconds:300,
	       SportFilter:0,
	       SportId:45,
	       Market:2,
	       OddsPageCode:0,
	       ViewType:2,
	       MatchIdList:[-1],
	       FromDate:"2016-09-22T08:59:50.0142233+08:00",
	       ToDate:"2016-09-23T08:59:50.0142233+08:00",
	       OddsPageName:"Handicap / Over Under",
	       BetTypes:[1,2,6,7,8,9,3,4,36,30,31,39],
	       Channel:"/S0M2O0V2",
	       OddsPageKey:"S0M2AHOU_AHOU1X2"
	    }
  }

  updateCriteria(){

  	//this.emit('change');
	}


} 

var criteriaStore = new CriteriaStore
export default criteriaStore