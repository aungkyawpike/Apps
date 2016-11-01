import React from 'react'
import classNames from 'classnames'
import LeagueStore from "../stores/LeagueStore"
import GameTypeSingle from './GameTypeSingle'

export default class GameType extends React.Component {

    constructor(props) {
        super();

        //if(LeagueStore.allLeagues != null && LeagueStore.allLeagues.length > 0){
            
        //    this.state = {
        //        league : LeagueStore.allLeagues.filter(league => league.LeagueId == props.leagueId )
        //    };

        //}

        this.state = {selectedLeague : props.selectedLeague, filterCriteria: {gameOrder:0, exotic:0} }

    }

    filterGameType(criteria){
        console.log('filterGameType')
    }

    createContent(){

        if(this.state.selectedLeague == null || this.state.selectedLeague.length < 0 ) return (<div>No Game Available</div>)

        var filteredGames = this.state.selectedLeague[0].Matches.filter(m => {

            return m.IsExotic == this.state.filterCriteria.exotic && m.GameOrder == this.state.filterCriteria.gameOrder
        })

        const GameTypeMatch = filteredGames.map(game =>{
            return <GameTypeSingle key={game.MatchId} match={game.MatchId}{...game} leagues = {this.state} openBetPlacementContainer={this.props.openBetPlacementContainer} />
            }) 

        //const GameTypeMatch = this.state.selectedLeague[0].Matches.map(match =>{
        //    return <GameTypeSingle match={match.MatchId}{...match} leagues = {this.state} openBetPlacementContainer={this.props.openBetPlacementContainer} />
        //    }) 

        return GameTypeMatch

    }   

    createTab(){

        var max = 0

        if(this.state.selectedLeague[0].Matches != null && this.state.selectedLeague[0].Matches.length > 0 )
            max = Math.max.apply(Math,this.state.selectedLeague[0].Matches.map(function(match){return match.GameOrder}))

        max = 4

        this.links = Array.from({length: max+1},(val,index)=>index + 0)

        var bolFirst = true
        const pageLink = this.links.map((obj) => {
            if(bolFirst){
                bolFirst = false
                return  <li key={obj} className={classNames("active")} onClick={ (e)=>  {this.selectTabChange(e, {obj})}} ><a href="return false" data-toggle="tab">总比赛胜利</a></li>
            }
            else {
	            	return  <li key={obj} ><a href="return false" data-toggle="tab" onClick={ (e)=>  {this.selectTabChange(e, {obj})}} >第{obj}局</a></li>
	            }
	    });

        return pageLink

    }

    selectTabChange(e, idx){

        console.log('tab clicked')

        this.setState({
            selectedLeague : this.state.selectedLeague,
            filterCriteria : {gameOrder:idx.obj, exotic:this.state.filterCriteria.exotic} }
        )

        
        //this.state = {selectedLeague : props.selectedLeague, filterCriteria: {gameOrder:0, exotic:0} }
    }

    selectMatchExoticChanged(idx){

        $('.select-match').each(function(idx, li) {
            $('ul li a').removeClass('active');
        });

        console.log('match/exotic clicked')

        this.setState({
            selectedLeague : this.state.selectedLeague,
            filterCriteria : {gameOrder:this.state.filterCriteria.gameOrder, exotic:idx} }
        )

    }



    render(){

        

        return (
                <div className={classNames("col-xs-6 bet-list-blue bet-list")}>
                <ul className={classNames("nav nav-tabs nav-justified")}>
                {/*<li className={classNames("active")}>><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#final" data-toggle="tab">总比赛胜利</a></li>
                <li><a href="return false" data-toggle="tab" onClick={this.filterGameType.bind(this)}>第一局</a></li>
                <li><a href="return false" data-toggle="tab">第二局</a></li>
                <li><a href="return false" data-toggle="tab">第三局</a></li> */}
                    {this.createTab()}
                </ul>
                <div className={classNames("tab-content")}>
                   <div id="final" className={classNames("tab-pane active")}>
                   <ul className={classNames("select-match btn-group")}>
                   <li><a href="return false" data-toggle="pill" className={classNames("pill match active")} onClick={this.selectMatchExoticChanged.bind(this,0)}>Match</a></li>
                   <li><a href="return false" data-toggle="pill" className={classNames("pill exotics")} onClick={this.selectMatchExoticChanged.bind(this,1)}>Exotics</a></li>
                   </ul>
                   <div className={classNames("all-odd")}>
                       {this.createContent()}
                       {/*
                      <nav aria-label="Page navigation">
                         <ul className={classNames("pagination")}>
                            <li> <a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#" aria-label="Previous"> <span aria-hidden="true">«</span> </a> </li>
                            <li><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#" className={classNames("active")}>1</a></li>
                            <li><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#">2</a></li>
                            <li><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#">3</a></li>
                            <li><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#">4</a></li>
                            <li><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#">5</a></li>
                            <li> <a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#" aria-label="Next"> <span aria-hidden="true">»</span> </a> </li>
                         </ul>
                      </nav>
                       */}
                   </div>
                   </div>
                </div>
                </div>

                )


    }



}