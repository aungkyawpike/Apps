import React from 'react';
import Match0 from "./Match0"
import LeftPanel from "./LeftPanel"
import classNames from "classnames"
import ESportGame from "./ESportGame"
import Page from "./Page"
import * as Language from "../Util/Language"
import LeagueStore from "../stores/LeagueStore"
//import MatchStore from "../stores/MatchStore"
import * as ESportAction from "../actions/ESportAction"
import ReactDOM from "react-dom"


export default class ESport extends React.Component {

	constructor(){
		super()

        this.pageRange = 3

        if(LeagueStore.getLeague() != null && LeagueStore.getLeague().length > 0){

            this.state = {
                league : LeagueStore.getLeague(),
                selectedLeague : -1,
                allMatches : LeagueStore.allMatches,
                indexMatches : LeagueStore.getIndexMatches(),
                filteredIndexMatches : LeagueStore.getAvailableIndexMatchesByRange(1,this.pageRange),
                availableIndexMatchesCount : LeagueStore.getAvailableIndexMatchesCount()
            };

        }

         
	}

  componentWillMount() {
    
      LeagueStore.on('change',() => {

        //MatchStore.reInitiateMatches()

        this.setState({
          league : LeagueStore.getLeague(),
          selectedLeague : LeagueStore.getSelectedLeague(),
          allMatches : LeagueStore.matchStore.allMatches,
          indexMatches : LeagueStore.matchStore.getIndexMatches(),
          filteredIndexMatches : LeagueStore.matchStore.getfilteredIndexMatches(), //filteredMatches,
          availableIndexMatchesCount : LeagueStore.matchStore.getAvailableIndexMatchesCount()
        });
          
      });

      // MatchStore.on('change',() => {

      //   this.setState({
      //     league : LeagueStore.getLeague(),
      //     selectedLeague : LeagueStore.getSelectedLeague(),
      //     allMatches : MatchStore.allMatches,
      //     indexMatches : MatchStore.getIndexMatches(),
      //     filteredIndexMatches : MatchStore.getfilteredIndexMatches(), //filteredMatches,
      //     availableIndexMatchesCount : MatchStore.getAvailableIndexMatchesCount()
      //   });
          
      // });
  }

  clickPlacebetHandler(clickInfo){

      console.log('click placebet' + clickInfo)
  }

  searchMatch(){

    var src = $('#txtSearch').val().toLowerCase()

    ESportAction.searchMatch(src)

  }

  pageClick(e, obj){

      ESportAction.filterPage((obj == 1 ? 1 : (obj-1) * this.pageRange + 1), obj * this.pageRange)

  }

  processData(){


    var data = {"Type":90,"Data":{"Market":2,"NewMatches":[],"CloseMatches":[2061320],"ZeroOddsMatches":[]}}

    ESportAction.mockPush(data)
  }

	render(){

      //if(this.state != null && this.state.league != null){
    
        var totalItemCount = this.state.availableIndexMatchesCount

        const MatchComponents = this.state.filteredIndexMatches!= null && this.state.filteredIndexMatches.map((match) => 
        {
            
                return  <Match0 clickPlacebet={this.clickPlacebetHandler.bind(this)} key= {match.MatchId} {...match} />
            

        });

     // }

            

    		    return(
                       
                          <div className={classNames("row")}>
                              <div className={classNames("row-height")}>
                                  <div className={classNames("col-xs-2 sidebar col-height col-top")}>
                                       <div className={classNames("sidebar-inner")}>
                                            <h3 className={classNames("sidebar-title")}>{Language.langLozalization('Chose Game')} 
                                              {/*<button className={classNames("glyphicon glyphicon-list btn btn-sm pull-right search-game")}></button>*/}
                                            </h3>
                                            <div id="accordion" className={classNames("panel-group")}>
                                                {this.state != null && this.state.indexMatches!= null && <LeftPanel leagueParam = {this.state.league} pageRange = {this.pageRange}/> }
                                               
                                                
                                            </div>
                                       </div>
                                  </div>
                                  <div className={classNames("col-xs-10 game-panel col-height col-top")}>
                                      <div className={classNames("panel-title row")}> 
                                        <div className={classNames("input-group")} >
                                          <span onClick={this.searchMatch.bind(this)}  className={classNames("input-group-btn")}><span className={classNames("glyphicon glyphicon-search")}></span></span>
                                          <input id="txtSearch" onChange={this.searchMatch.bind(this)} placeholder={Language.langLozalization('Search')}   className={classNames("form-control")} />
                                        </div>
                                        <Page totalItemCount={totalItemCount} pageRange={this.pageRange} pageClass="panel-pagination" clickEvent={this.pageClick.bind(this)} />
                                      </div>
                                      <div className={classNames("panel-content over all-game")}>
                                          <div><button onClick={this.processData} >mock push</button></div>
                                          {this.state != null && this.state.indexMatches!= null && MatchComponents}
                                      </div>
                                  </div>
                              </div>
                          </div>
    			       )


	}

}
