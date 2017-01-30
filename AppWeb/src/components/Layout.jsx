import React from 'react';
import {render} from "react-dom"
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange400} from 'material-ui/styles/colors';

const appTheme = getMuiTheme({
	palette: {
		primary1Color: deepOrange400,
		fontFamily: 'Roboto, sans-serif'
	}
});

export default class Layout extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={appTheme}>
				<div className="container-fluid">
					{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
}




