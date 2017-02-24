import 'antd/dist/antd.css'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router"
import App from "./components/App"
import ProductsCriteriaPanel from './components/ProductsCriteriaPanel'
import Products from './components/Products'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="productscriteriapanel" component={ProductsCriteriaPanel}/>
			<Route path="products" component={Products}/>
		</Route>
	</Router>
	,
	document.querySelector("#container")
)



