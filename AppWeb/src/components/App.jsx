import React from 'react';
import {render} from "react-dom"
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange400} from 'material-ui/styles/colors'
import AppsBar from '../components/AppsBar'
import BusinessMenu from '../components/BusinessMenu'

const appTheme = getMuiTheme({
	palette: {
		primary1Color: deepOrange400,
		fontFamily: 'Roboto, sans-serif'
	}
});

export default class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={appTheme}>
				<div className="container-fluid">
					<div>
						<AppsBar/>
						<BusinessMenu/>
					</div>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
}




