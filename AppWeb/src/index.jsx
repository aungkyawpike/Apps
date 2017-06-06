import 'antd/dist/antd.css'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import App from "./components/App"
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" render={() =>
      	<Redirect to="/app"/>
 			}/>
			<Route path="/app" component={App} />
		</div>
	</Router>
	,
	document.querySelector("#container")
)



