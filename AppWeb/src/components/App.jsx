import React from 'react';
import {Route, Link} from "react-router-dom"
import {render} from "react-dom"
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {grey50} from 'material-ui/styles/colors'
import AppsBar from '../components/AppsBar'
import PlatformsMenu from '../components/PlatformsMenu'
import ProductsCriteriaPanel from '../components/ProductsCriteriaPanel'
import Products from '../components/Products'
import ProductDetail from '../components/ProductDetail'
import ServicesCriteriaPanel from '../components/ServicesCriteriaPanel'
import Services from '../components/Services'
import ServiceDetail from '../components/ServiceDetail'
import Create from '../components/Create'
import CreateProduct from '../components/CreateProduct'
import CreateService from '../components/CreateService'

const appTheme = getMuiTheme({
	palette: {
		primary1Color: grey50,
		fontFamily: 'Roboto, sans-serif'
	}
});

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={appTheme}>
				<div>
					<AppsBar/>
					<PlatformsMenu/>
					<Route path={`${this.props.match.url}/productscriteriapanel`} component={ProductsCriteriaPanel}/>
					<Route path={`${this.props.match.url}/products`} component={Products}/>
					<Route path={`${this.props.match.url}/productdetail/:id`} component={ProductDetail}/>
					<Route path={`${this.props.match.url}/servicescriteriapanel`} component={ServicesCriteriaPanel}/>
					<Route path={`${this.props.match.url}/services`} component={Services}/>
					<Route path={`${this.props.match.url}/servicedetail/:id`} component={ServiceDetail}/>
					<Route path={`${this.props.match.url}/create`} component={Create}/>
					<Route path={`${this.props.match.url}/createproduct`} component={CreateProduct}/>
					<Route path={`${this.props.match.url}/createservice`} component={CreateService}/>
				</div>
			</MuiThemeProvider>
		)
	}
}




