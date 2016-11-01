import React from 'react'
import classNames from 'classnames'
import GameType from './GameType'
import Modal from 'react-bootstrap/lib/Modal'
import BetPlacementContainer from './BetPlacementContainer'
import LeagueStore from "../stores/LeagueStore"
import Countdown from "../components/Countdown"
import CountdownDetail from "../components/CountdownDetail"
import Moment from "moment"
import * as CommonConst from "../Util/CommonConst"

export default class ESportGame extends React.Component {

    constructor(props) {
        super();
        
        this.currentLeague = LeagueStore.allLeagues.filter(l => {
            return l.LeagueId == props.params.LeagueId
        })

        this.state = {
            showBetPlacementContainer :false,
            currentLeague : this.currentLeague,
            bettingType : 'BetClickInfo',
            modalClass : 'singleBetClass'
        }
        this.openBetPlacementContainer= this.openBetPlacementContainer.bind(this)
        this.closeBetPlacementContainer = this.closeBetPlacementContainer.bind(this)
        this.setBettingDialog = this.setBettingDialog.bind(this)

    }

    closeBetPlacementContainer(){
        this.setState({ showBetPlacementContainer: false });
    }

    openBetPlacementContainer() {

        this.setState({
            showBetPlacementContainer :true,
            currentLeague : this.currentLeague,
            bettingType : 'BetClickInfo',
            modalClass : 'singleBetClass'})

        //this.setState({ showBetPlacementContainer: true });
    }

    setBettingDialog(event, bettingType){

        event.preventDefault();
        
        var dialogType = 'BetClickInfo'

        if(bettingType == CommonConst.BettingParlay)
            dialogType = 'ComboBet'
        
        this.setState({
            showBetPlacementContainer :true,
            currentLeague : this.currentLeague,
            bettingType : dialogType,
            modalClass : 'doubleBetClass'})

    }

    

    render(){
        
        var matchDate = new Date(parseInt(this.currentLeague[0].Matches[0].MatchDate.substr(6)))

        let OPTIONS = { endDate: Moment(matchDate).format('YYYY/MM/DD hh:mm'), prefix: 'left' }

        return (

                  <div className={classNames("container bet blue")}>
                  	<div className={classNames("row helper")}>
                      <div className={classNames("col-xs-6")}>
                          <div className={classNames("datetime")}>
                            <div className={classNames("date")}>{Moment(matchDate).format('YYYY/MM/DD HH:mm ')}</div>
                            {/* <div className={classNames("date")}>2016/08/09</div>
                            <div className={classNames("time")}>17:30</div> */}
                          </div> 
                          <div className={classNames("countdown is-countdown")}>
                            <CountdownDetail options={OPTIONS} />
                            {/*<div className={classNames("days")}>116<div className={classNames("unit")}>天</div></div>
                            <div className={classNames("hours")}>5<div className={classNames("unit")}>小时</div></div>
                            <div className={classNames("minutes")}>34<div className={classNames("unit")}>分</div></div>
                            <div className={classNames("seconds")}>45<div className={classNames("unit")}>秒</div></div> */}
                          </div>
                        
                        </div> 
                        <div className={classNames("col-xs-6 text-right")}>
                          <ul>
                            <li><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#" className={classNames("dark-red")}> <img src="./images/history.png" />当前投注历史过程<span className={classNames("has-msg")}>1</span></a></li>
                            <li><a href="return false" onClick={ (e)=>  {this.setBettingDialog(e, CommonConst.BettingParlay)}} data-toggle="tooltip" title="您的过关已經加入过关清单" className={classNames("dark-red pass-modal")}> <img  src="./images/pass.png" />过关清单</a></li>
                            <li><a href="http://lolmatrix.rockylhc.com/bet-pnbWBkS30H.html#" className={classNames("dark-red")}> <img src="./images/statistic.png" />统计</a></li>
                          </ul>
                        </div>
                  	</div>

                  	<div className={classNames("row")}>
                      <h1>{this.props.params.LeagueId}</h1>
                      <GameType openBetPlacementContainer={this.openBetPlacementContainer} leagueId= {this.props.params.LeagueId} selectedLeague={this.state.currentLeague} />
                      <div className={classNames("col-xs-6 info")}>
                        <div className={classNames("embed-media")}>
                            <div>
                          <iframe type="text/html" width="640" height="390" src="https://www.youtube.com/embed/dvJaSmunY7Y?autoplay=1" frameBorder="0"></iframe>
                          </div>
                          <div>
                           </div>
                        </div>
                        <div className={classNames("road-map")}>
                          {/*<iframe type="text/html" width="860" height="650" src="http://lol.esportsmatrix.com/zh-CN/embed/scoreboard/1" frameborder="0"></iframe>*/}
                          <iframe type="text/html" width="860" height="650" src="http://lol.esportsmatrix.com/zh-CN/embed/scoreboard/1" frameBorder="0"></iframe>
                        </div>
                      </div>
                  	</div>

                    <Modal dialogClassName={this.state.modalClass} show={this.state.showBetPlacementContainer} onHide={this.closeBetPlacementContainer}>
                       <Modal.Body>
                         <BetPlacementContainer ChildrenComponent={[this.state.bettingType]} closeBetPlacementContainer={this.closeBetPlacementContainer}/>
                       </Modal.Body>
                    </Modal>
                    </div>
                )
    }



}