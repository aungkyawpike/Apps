import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import Layout from "./components/Layout"
import Home from "./components/Home"

ReactDOM.render(

	<Router history={hashHistory} >
			<Route path="/" component={Layout} >
				<IndexRoute component={Home} />
				<Route path="Home" component={Home} />
			</Route>
	</Router>
	,
	document.querySelector("#home")

)



