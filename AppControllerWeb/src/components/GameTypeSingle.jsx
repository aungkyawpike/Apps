import React from 'react'
import classNames from 'classnames'
import Criteria from "../stores/CriteriaStore"


export default class GameTypeSingle extends React.Component {

    constructor(props) {
        super();

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
          //counting-done
        ]
    }

    render(){


        return (  
                  <table className={classNames("table odd-table")} id={this.props.MatchId}>
                      <thead>
                         <tr>
                            <td colSpan="3" className={classNames("table-title")}>{this.props.GameTypeCode}</td>
                         </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={classNames("first")}> 
                            <span className={classNames("odd-circle")}></span><span className={classNames("odd-text")}>1</span> 
                            <img src="./images/team-world-elite-150x150.png" />{this.props != null && this.props.HomeTeam[Criteria.language]}
                          </td>
                          <td>{/*this.props.GameTypeCode*/} 
                            <span className={classNames("odd")}>1
                            <span className={classNames("odd-circle")}></span>
                            <span className={classNames("odd-text")}>赔 </span></span>
                            
                            {this.FTAH.indexOf(this.props.GameTypeCode) > -1 && 
                            this.props.OddsLines[0].FTAH.HomeOddsStr != null &&
                            this.props.OddsLines[0].FTAH.HomeOddsStr}  

                            {this.FTAH.indexOf(this.props.GameTypeCode) < 0 && 
                             this.props.OddsLines[0].FT1X2 != null && 
                             this.props.OddsLines[0].FT1X2.HomeOddsStr}
                          </td>
                            <td className={classNames("last")}> 
                                <a onClick={this.props.openBetPlacementContainer} className={classNames("odd-bet bet-modal")}><img src="./images/blue-placebet.jpg"/></a> 
                                <a onClick={this.props.openBetPlacementContainer} className={classNames("add-to-pass")}><img src="./images/add-pass.jpg"/></a> 
                            </td>
                        </tr>
                        <tr>
                           <td className={classNames("first")}> <span className={classNames("odd-circle")}></span><span className={classNames("odd-text")}>2</span> <img src="./images/vici-gaming-150x150.png" />{this.props != null && this.props.AwayTeam[Criteria.language]} </td>
                           <td>{/*总胜利比赛*/} <span className={classNames("odd")}>1<span className={classNames("odd-circle")}></span><span className={classNames("odd-text")}>赔</span></span>1.112</td>
                           <td className={classNames("last")}> <a className={classNames("odd-bet bet-modal")}><img src="./images/blue-placebet.jpg"/></a> <a className={classNames("add-to-pass")}><img src="./images/add-pass.jpg"/></a> </td>
                        </tr>
                      </tbody>
                  </table>
                )
    }

}