import React from 'react';
import classNames from "classnames";
import Criteria from "../stores/CriteriaStore"

export default class OddslineAway extends React.Component {

    constructor(props){
      super()

      this.FTAH = [
        'GameWin',
        'SeriesWin',
        'WinHandicapA-15',
        'WinHandicapB-15',
        'WinHandicapA-25',
        'WinHandicapB-25',
        'FB',
        'FD',
        'FT'
      ]

    }

    render(){

        var classNames = require('classnames');

        return (
                    <div className={classNames('row')}>
                       <div className={ classNames('col-xs-3') }><img src={require('../images/vici-gaming.png')} />{this.props.matchParam != null && this.props.matchParam.AwayTeam[Criteria.language]}</div>
                       <div className={ classNames('col-xs-3') }>总胜利比赛 
                          <span className={ classNames('show-odd') }> 1 
                          <span className={ classNames('odd-circle') }></span>
                          <span className = { classNames('odd-text') }> 赔 </span>
                             {this.FTAH.indexOf(this.props.matchParam.GameTypeCode) > -1 && this.props.matchParam.OddsLines[0].FTAH.AwayOddsStr}
                             {this.FTAH.indexOf(this.props.matchParam.GameTypeCode) < 0 && 
                              this.props.matchParam.OddsLines[0].FT1X2!= null &&
                              this.props.matchParam.OddsLines[0].FT1X2.AwayOddsStr}
                          </span>
                       </div>
                       <div className={ classNames('col-xs-3','action-bottom','action','text-center') } >赛制: BO{this.props.matchParam.LeagueBO != 0 && this.props.matchParam.LeagueBO}</div>
                       <div className={ classNames('col-xs-3') }></div>
                    </div>
                )
    }
}