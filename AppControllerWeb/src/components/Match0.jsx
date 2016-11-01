import React from "react"
import OddslineHome from "../components/OddslineHome"
import OddslineAway from "../components/OddslineAway"
import classNames from "classnames";
import Moment from "moment"
import {Link} from "react-router"
import CriteriaStore from "../stores/CriteriaStore"

export default class Match0 extends React.Component {

    constructor(props) {
        super();
    }

    placebetClickHandler(e){

        var testValue = e.target.value
        this.props.clickPlacebet(testValue)
    }

    render(){

        var classNames = require('classnames');

        var matchDate = new Date(parseInt(this.props.MatchDate.substr(6)));

        return (

                  <div className = { classNames('row-height')}>
                       <div className = { classNames('game-table', 'blue') }>
                            <div className = { classNames('table-title','text-center') }  id={this.props.LeagueId} >
                                <img src={require('../images/League.png')} />
                                <span>{ this.props.LeagueName != null && this.props.LeagueName[CriteriaStore.language] }</span>
                                <div className={classNames('pull-right')}>{Moment(matchDate).format('MM/DD/YYYY hh:mm a')}</div> 
                            </div>
                            <div className = {classNames('row-height')} id={this.props.MatchId} >
                                <div className={classNames('col-xs-1','game-icon','col-height','col-middle')}>
                                    <img src={require('../images/lol-icon.jpg')} />
                                    
                                </div>
                                <div className={classNames('col-xs-10','game-info','col-height','col-top')}>
                                   <OddslineHome matchParam = {this.props} />
                                   <OddslineAway matchParam = {this.props} />
                                </div>
                                <div className={classNames('col-xs-1','game-bet','col-height','col-middle','game-icon')}>
                                    <Link to={"ESportGame/" + this.props.LeagueId}><img src={require('../images/blue-bet.jpg')} /><span className={classNames('button-name')}>Place Bet</span></Link>
                                </div>
                            </div>
                       </div>
                  </div>

                )
    }



}