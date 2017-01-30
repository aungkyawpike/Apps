import React from 'react';
import ReactDOM from "react-dom";
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CriteriaPanel from '../components/CriteriaPanel'

export default class BusinessMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			selectedBusiness: 'Product'
		};
	}

	handleOpenCriteriaPanelDialog = (selectedBusiness) => {
		this.setState({
			open: true,
			selectedBusiness : selectedBusiness
		});
	};

	handleCloseCriteriaPanelDialog = () => {
		this.setState({open: false});
	};

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleCloseCriteriaPanelDialog}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleCloseCriteriaPanelDialog}
			/>
		];

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<FlatButton className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Product" primary={true} onTouchTap={()=>this.handleOpenCriteriaPanelDialog('product')}/>
					<FlatButton className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Service" primary={true} onTouchTap={()=>this.handleOpenCriteriaPanelDialog('service')}/>
					<FlatButton className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Job" primary={true} onTouchTap={()=>this.handleOpenCriteriaPanelDialog('job')}/>
					<FlatButton className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Property" primary={true} onTouchTap={()=>this.handleOpenCriteriaPanelDialog('property')}/>
					<FlatButton className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Automobile" primary={true} onTouchTap={()=>this.handleOpenCriteriaPanelDialog('automobile')}/>
					<Dialog
						title="Business"
						actions={actions}
						modal={false}
						open={this.state.open}
						onRequestClose={this.handleCloseCriteriaPanelDialog}
						contentStyle={{	width: '100%',maxWidth: 'none'}}
						autoScrollBodyContent={true}
					>
						<CriteriaPanel selectedBusiness={this.state.selectedBusiness}/>
					</Dialog>
				</div>
			</nav>
		)
	}
}
