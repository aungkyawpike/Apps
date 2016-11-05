import React from "react"
import classNames from "classnames";
import LeagueStore from "../stores/LeagueStore"
import img from "../images/league-icon.png"
import Criteria from "../stores/CriteriaStore"
import * as ESportAction from "../actions/ESportAction"

export default class LeftPanel extends React.Component {	

	constructor(props){
		super()
		this.getLeagueMatches = this.getLeagueMatches.bind(this);
	}

	getLeagueMatches(leagueId){

		LeagueStore.setSelectedLeague(leagueId)
	}

	selectMatchesByLeague(leagueId){

	    ESportAction.selectMatchesByLeague(leagueId, this.props.pageRange)

	}

    render(){

    	if(this.props.leagueParam.length > 0) {

    		var menuList;

	        
	        
		        return (

							<div className = {classNames("panel","panel-default")}>
							   <div className = {classNames("panel-heading-padding","blue")} >
							      <h4 className = {classNames("panel-title")} ><a data-toggle="collapse" data-parent="#accordion" href="#lol"> <img src={img} className = {classNames("league-icon")} /> LOL</a></h4>
							   </div>
							   <div id="lol" className = {classNames("panel-collapse","collapse","in")}>
							      <ul className ={classNames("panel-body")}>
							      {
							          this.props.leagueParam.map(function(league) {

							              let boundItemClick = this.selectMatchesByLeague.bind(this, league.LeagueId);

							              return <li key={league.LeagueId} ><button className={classNames("link-button")} onClick={boundItemClick}>{league.LeagueName[Criteria.language]}</button></li>
							              }, this)
							      }
							      </ul>
							   </div>
							</div>

		                )
	        

	        }
	        else {
	        	return ( <div></div>)
	        }
    }



}