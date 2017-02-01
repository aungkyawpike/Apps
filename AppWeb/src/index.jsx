import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router"
import App from "./components/App"
import CriteriaPanel from './components/CriteriaPanel'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="criteriaPanel/:selectedPlatforms" component={CriteriaPanel}/>
		</Route>
	</Router>
	,
	document.querySelector("#container")
)



