import React from 'react';
import {EventEmitter} from "events";
//import LeagueStore from "./LeagueStore"
import LanguageStore from "./LanguageStore"
import dispatcher from "../dispatcher/dispatcher"
import LeagueStore from "./LeagueStore"


export class MatchStore extends EventEmitter {

    constructor(allLeagues, leagueStore){

        super()

        //this.getIndexMatches = this.getIndexMatches.bind(this)
        //this.pageFilterMatches = this.pageFilterMatches.bind(this)

        this.leagueStore = leagueStore
        this.allLeagues = allLeagues
        this.matches = this.initiateMatches()
        this.allIndexMatches = this.sortMatches(this.getIndexMatches()) //.sort((a, b) => b.MatchDate - a.MatchDate)
        this.availableIndexMatches = this.allIndexMatches
        this.filteredIndexMatches = this.allIndexMatches
        this.selectedIndexMatchesCount = (this.allIndexMatches != null && this.allIndexMatches.length > 0 ) ? this.allIndexMatches.length : 0
        this.selectedMatchFilterType = 'all'

        dispatcher.register(this.searchMatch.bind(this));
        dispatcher.register(this.selectMatchesByLeague.bind(this));
        dispatcher.register(this.pageFilterMatches.bind(this));
        
    }

    getSelectedMatchFilterType() { return this.selectedMatchFilterType }

    get allMatches() { return this.matches; }

    getAvailableIndexMatchesCount() {
        return (this.availableIndexMatches != null && this.availableIndexMatches.length > 0 ) ? this.availableIndexMatches.length : 0
    }

    getfilteredIndexMatches(){
        return this.filteredIndexMatches
    }
    

    getIndexMatches() { 

        var runningNo = 0
        var indexMatches = this.matches.filter((match) => 
        { 
            if(match.GameTypeCode == "SeriesWin"){
                runningNo += 1
                match['displaySeq']  = runningNo 
                match['LeagueBO'] = this.getLeagueBOCount(match.LeagueId)
                return match
            }
            
        }); 

        return indexMatches
    }

    getAvailableIndexMatchesByRange(min, max) { 

        //var rangeMatches = this.availableIndexMatches.filter((match) => {
        //    return match.displaySeq >=  min &&  match.displaySeq <=  max
        //})

        var rangeMatches = this.availableIndexMatches.slice(min-1, max)  

        this.filteredIndexMatches = rangeMatches

        return rangeMatches

    }



    reInitiateMatches()
    {
        this.matches = this.initiateMatches()
    }

    initiateMatches()
    {

        var AllMatches = []
        var leagues = this.allLeagues
        if(leagues.length > 0 )
        {

            leagues.map((league) => {

                 league.Matches.map((match) => {

                    match['LeagueName'] = league.LeagueName; 
                    AllMatches.push(match);

                 })

              })
        }

        //AllMatches.map((match) => { console.log(match.LeagueId)})

        this.sortMatches(AllMatches)

        //AllMatches.map((match) => { console.log('sorted-> ' + match.LeagueId)})
        

        //var testSlice = AllMatches.slice(0, 5)

        return AllMatches
    }

    getLeagueBOCount(leagueId){

        var max = 1

        var league = this.allLeagues.filter((league)=>{
            return league.LeagueId == leagueId
        })

        if(league.length > 0 ){

            if(league[0].Matches != null && league[0].Matches.length > 0 )
                max = Math.max.apply(Math,league[0].Matches.map(function(match){return match.GameOrder}))

        }

        return max

    }

    searchMatch(data){

        if(data.type != 'SEARCH_LEAGUE') return

        var src = data.searchStr.toLowerCase()

        var foundList = this.availableIndexMatches.filter((match) => {

        return (match.AwayTeam[LanguageStore.siteLanguage].toLowerCase().indexOf(src) > -1 ||
                match.HomeTeam[LanguageStore.siteLanguage].toLowerCase().indexOf(src) > -1 ||
                match.LeagueName[LanguageStore.siteLanguage].toLowerCase().indexOf(src) > -1) && match.GameTypeCode == 'SeriesWin'
        })

        this.filteredIndexMatches  = foundList

        this.selectedMatchFilterType = 'searchFilter'

        this.leagueStore.emit('change')

    }

    selectMatchesByLeague(data){

        if(data.type != 'SELECT_LEAGUE') return

        var src = data.leagudID

        var foundList = this.allMatches.filter((match) => {

            return match.LeagueId == src  && match.GameTypeCode == 'SeriesWin'

        })

        this.availableIndexMatches  = foundList

        this.filteredIndexMatches  = foundList.slice(0, data.pageRange)

        this.selectedMatchFilterType = 'leagueFilter'

        this.leagueStore.emit('change')

    }

    pageFilterMatches(data){

        if(data.type != 'PAGE_CHANGE') return

        //var rangeMatches = this.availableIndexMatches.filter((match) => {
        //   return    match.displaySeq >=  data.min &&  match.displaySeq <=  data.max
        //})

        var rangeMatches = this.availableIndexMatches.slice(data.min-1, data.max)  

        this.filteredIndexMatches = rangeMatches

        this.selectedMatchFilterType = 'pageFilter'

        this.leagueStore.emit('change')
    }

    sortMatches(matches){

        if(matches != null)
        {
            matches.sort((a, b) => {
                if(a.MatchDate > b.MatchDate) //LeagueId MatchDate
                    return 1
                else if(a.MatchDate < b.MatchDate)
                    return -1

                return 0
            })
        }

        return matches
    }

}

// const matchStore = new MatchStore()
// //export let matchStore = new MatchStore(allLeague);
// dispatcher.register(matchStore.searchMatch.bind(matchStore));
// dispatcher.register(matchStore.selectMatchesByLeague.bind(matchStore));
// dispatcher.register(matchStore.pageFilterMatches.bind(matchStore));

// export default matchStore

//window.dispatcher = dispatcher;
//window.matchStore = matchStore;


