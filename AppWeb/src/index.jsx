import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import Layout from "./components/Layout"
import ESport from "./components/ESport"
import ESportGame from "./components/ESportGame"
import Match0 from "./components/Match0"
import SingleBet from "./components/SingleBet"


ReactDOM.render(

	<Router history={hashHistory} >
		        <Route path="/" component={Layout} >
			    	<IndexRoute component={ESport} />
			    	<Route path="ESport" component={ESport} >
			    		<Route path="Match0" component={Match0} />
			    	</Route>
			    	    <Route path="/SingleBet" component={SingleBet} />
			    	<Route path="ESportGame/:LeagueId" component={ESportGame} />
			    </Route>
	       
	</Router>
	,
	document.querySelector("#esport")
   
)
		


