import React, { Component } from 'react'
import {render} from 'react-dom'
import BetClickInfoStore from '../stores/BetClickInfoStore' 
import {BetClickUIAction} from "../actions/BetActions"
import SingleBet from "./SingleBet"

export default class BetClickInfo extends Component {

    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state =  { BetClickInfo : this.getBetClickInfos()}
        BetClickInfoStore.on('change',this.onChange)
        var requestObj = this.createBetClickInfoRequestObj()
        BetClickUIAction(requestObj)
    }
    
    getBetClickInfos() {
        return BetClickInfoStore.getBetClickInfos()
    }

    onChange() {
        this.setState({ BetClickInfo : this.getBetClickInfos()})
    }

    createBetClickInfoRequestObj() {
        return {  
            "Token":"a36818fb-56a0-4e71-9754-25773aa3e6d6",
            "MemberCode":"bae01",
            "CompanyId":85,
            "SportId":0,
            "MatchId":2061981,
            "Market":2,
            "IsParlayMatch":false,
            "BetType":1,
            "Selection":"Home",
            "SelectionORTeamId":"",
            "Handicap":0.5,
            "Odds":0.95,
            "MemberGroupID":18,
            "Language":0,
            "Currency":"MYR",
            "Oddstype":2,
            "BetInfoOddsTypeString":"MALAY"
        }
    }

    render() {
        var betClickInfo = JSON.stringify(this.state.BetClickInfo[0])
        
        return (

            <div> 
                <SingleBet />
            </div>
        )
    }
}
