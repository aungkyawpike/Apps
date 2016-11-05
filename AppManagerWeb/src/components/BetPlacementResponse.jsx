import React, { Component } from 'react'
import {render} from 'react-dom'
import PlaceBetInfoStore from '../stores/PlaceBetInfoStore' 
import {PlaceBetUIAction} from "../actions/BetActions"

export default class BetPlacementResponse extends Component {

    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state =  { PlaceBetInfo : this.getPlaceBetInfos()}
        PlaceBetInfoStore.on('change',this.onChange)
        var requestObj = this.createPlaceBetInfoRequestObj()
        PlaceBetUIAction(requestObj)
    }

    getPlaceBetInfos() {
        return PlaceBetInfoStore.getPlaceBetInfos()
    }

    onChange() {
        this.setState({ PlaceBetInfo : this.getPlaceBetInfos()})
    }

    createPlaceBetInfoRequestObj() {
        return [
                  {
                      "MemberCode":"bae01",
                      "CompanyId":85,
                      "RemoteIP":"",
                      "MatchNO":2061981,
                      "StakeTypeID":1,
                      "Stake":6,
                      "Odds":0.95,
                      "OddsType":2,
                      "BetInfoOddsTypeString":"MALAY",
                      "Handicap":0.5,
                      "Handicapsign":"-",
                      "Selection":0,
                      "HomeScore":0,
                      "AwayScore":0,
                      "IsHome":true,
                      "ClientType":"INTERNET",
                      "IsAllowOddsChanged":true,
                      "IsAllowMatchRemoved":true,
                      "IsParlayPlaceBet":false,
                      "MaxPayout":157199.75,
                      "AcceptHigherOdds":false,
                      "PlaceBetFrom":1,
                      "SelectionORTeamId":null,
                      "BetOn":"",
                      "StakeType":"",
                      "SportType":0,
                      "LeagueName":"Spain La Liga",
                      "SeasonId":0,
                      "VirtualSoccerMatchDay":0,
                      "VirtualBasketballMatchDay":0
                  }
              ]
    }

    render() {
        var placeBetInfo = JSON.stringify(this.state.PlaceBetInfo[0])
        return (
            <div style={{width: 300, height: 300, backgroundColor : 'Red'}}>
                 <div>
                    {placeBetInfo}
                </div>
            </div>
    )}
}
