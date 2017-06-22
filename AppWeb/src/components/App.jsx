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
import Create from '../components/Create'
import CreateProduct from '../components/CreateProduct'

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
					<Route path={`${this.props.match.url}/productdetail/:_id`} component={ProductDetail}/>
					<Route path={`${this.props.match.url}/create`} component={Create}/>
					<Route path={`${this.props.match.url}/createproduct`} component={CreateProduct}/>
				</div>
			</MuiThemeProvider>
		)
	}
}




