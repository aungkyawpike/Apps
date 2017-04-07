import 'antd/dist/antd.css'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router"
import App from "./components/App"
import ProductsCriteriaPanel from './components/ProductsCriteriaPanel'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import ServicesCriteriaPanel from './components/ServicesCriteriaPanel'
import Services from './components/Services'
import ServiceDetail from './components/ServiceDetail'
import Create from './components/Create'
import CreateProduct from './components/CreateProduct'
import CreateService from './components/CreateService'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="productscriteriapanel" component={ProductsCriteriaPanel}/>
			<Route path="products" component={Products}/>
			<Route path="productdetail/:id" component={ProductDetail}/>
			<Route path="servicescriteriapanel" component={ServicesCriteriaPanel}/>
			<Route path="services" component={Services}/>
			<Route path="servicedetail/:id" component={ServiceDetail}/>
			<Route path="create" component={Create}/>
			<Route path="createproduct" component={CreateProduct}/>
			<Route path="createservice" component={CreateService}/>
		</Route>
	</Router>
	,
	document.querySelector("#container")
)



