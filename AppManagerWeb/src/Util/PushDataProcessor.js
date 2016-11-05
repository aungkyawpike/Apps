import * as OddsConst from "../Util/OddsConst"
import HubClient from "../stores/HubClient"


export class PushDataProcessor {

    constructor(leagueStore){

	    this.League = leagueStore.getLeague()

		HubClient.initialize(() => HubClient.subscribe('/S45M2O0V2', this.processPushData))
		HubClient.subscribe('/S45M2O0V2', this.processPushData)
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

	}

	processData(data){


		if (data.Type == OddsConst.RefreshAll) // Recieve when  Data Service Start and OddsDisplay Server Start Connect

			console.log('refreshAll push')

		else if (data.Type == OddsConst.RefreshTemplate) // Recieve when ReloadCompanyFeatures

			console.log('RefreshTemplate push')

		else if (data.Type == OddsConst.ClearAndRefreshPartial) // For League and TeamName , Match Date Change

			console.log('ClearAndRefreshPartial push')

		else if (data.Type == OddsConst.NewAndUpdateRefreshPartial) // New Matches and Zero Odds Matches

			console.log('NewAndUpdateRefreshPartial push')
			
		else if (data.Type == OddsConst.RefreshPartial) // Close Matches

			this.partialUpdate(data)

		else if(data.Type == OddsConst.ScreenUpdate) // MatchTime, Score, Red Card, Odds Update

		    this.screenUpdate(data)
					
		else (data.Type == OddsConst.SportUpdate)

			console.log('SportUpdate push')

	}

	partialUpdate(receivedData){

		var pd = receivedData.Data

	        	if(pd.CloseMatches && pd.CloseMatches.length > 0)
	        	{
	        		
					var foundMatch = null ;
					var l_idx = -1
					var m_idx = -1
					LeagueStore.getLeague().map((league, l_index) => {
						league.Matches.map((match, index) => {
							if(parseInt(match.MatchId) == pd.CloseMatches[0]){
								foundMatch = match
								l_idx = l_index
								m_idx = index
							}
						})

						if(foundMatch){
							league.Matches = league.Matches.filter(m => m.MatchId !== foundMatch.MatchId)
							LeagueStore.leagueChanged()
						}

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

	matchFinder(matchId){

		var _match

		LeagueStore.getLeague().map(league => {
						league.Matches.map(match => {
							if(parseInt(match.MatchId) == matchId){
								_match = match
							}
						})
					})

		return _match

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

			// if(pushData.BetType == 1){

			// 	this.state.League.map(league => {

			// 		league.Matches.map(match => {

			// 			if(parseInt(match.MatchId) == pushData.MatchId){

			// 				match.OddsLines.map(odd => {

			// 					let homeOdd = Map(odd.FTAH)

			// 					let Odd = Map(odd)
								
			// 					Odd = homeOdd.setIn([0,'FTAH','HomeOddsStr'], pushData.HomeOdds)

								

			// 					homeOdd = homeOdd.set('HomeOddsStr', pushData.HomeOdds)

			// 				})
			// 			}
					
			// 		})
			// 	})

			// }

			console.log('Odds Update - processed' + pushData)

			this.emit('change')

		}

	}

}


