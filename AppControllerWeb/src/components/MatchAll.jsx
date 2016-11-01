import React from "react"
import Match0 from "../components/Match0"
import * as Util from "../Util/webUtil"
import $ from 'jquery'
import oddsCriteria from "../Util/oddsCriteria"

export default class MatchAll extends React.Component {

	// constructor() {

	// 	super();
	// 	debugger;
	// 	var criteria = {sportid:45}

	// 	var data = Util.getAsyncData("GetOddsData", criteria, function gotLeagueMatches(){ console.log('hello')})

 //        this.state = {
 //            matches : data
 //        };
		

	// }

	constructor(){
		 super()
		// this.componentWillMount = this.componentWillMount.bind(this);
		// this.convertToLeagueObj = this.convertToLeagueObj.bind(this);
  //       this.makeLeague = this.makeLeague.bind(this);
  //       this.makeMatchArray = this.makeMatchArray.bind(this);
  //       this.makeMatch = this.makeMatch.bind(this);

	}

	componentWillMount() {

		//var criteria = oddsCriteria.getCriteria2()
		//var parameter = {}		    

        //Util.getAsyncData("GetOddsData2", criteria, this.gotLeagueMatches)

    }

    gotLeagueMatches(data){ 
		var a = data
		// if(data)
		// 	var b = this.convertToLeagueObj(data)
		//if(data[0] != null)
		//	this.setState(data[0].Matches)
	} 			 

	render(){

		return (

			<div>
				<Match0 />
			</div>

		)

	}

}






