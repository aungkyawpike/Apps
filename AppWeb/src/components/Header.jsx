import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	static muiName = 'FlatButton';

	render() {
		return (
			<FlatButton {...this.props} label="Login"/>
		);
	}
}

const Logged = (props) => (
	<IconMenu
		{...props}
		iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem primaryText="Account"/>
		<MenuItem primaryText="Setting"/>
		<MenuItem primaryText="Sign out"/>
	</IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	state = {
		logged: false
	};

	handleChange = (event, logged) => {
		this.setState({logged: logged});
	};

	render() {
		return (
			<AppBar
				title="Apps"
				iconElementLeft={<IconButton><AppsIcon /></IconButton>}
				iconElementRight={this.state.logged ? <Logged /> : <Login />}
			/>
		);
	}
}

export default Header;
