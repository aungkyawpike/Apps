import React from 'react';
import ReactDOM from "react-dom";
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Link } from 'react-router'
import CriteriaPanel from '../components/CriteriaPanel'

export default class BusinessMenu extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<FlatButton containerElement={<Link to="/criteriaPanel/product"/>}
											className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Product" primary={true}/>
					<FlatButton containerElement={<Link to="/criteriaPanel/service"/>}
											className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Service" primary={true}/>
					<FlatButton containerElement={<Link to="/criteriaPanel/job"/>} className="col-xs-6 col-sm-6 col-md-2 col-lg-2"
											label="Job" primary={true}/>
					<FlatButton containerElement={<Link to="/criteriaPanel/property"/>}
											className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Property" primary={true}/>
					<FlatButton containerElement={<Link to="/criteriaPanel/automobile"/>}
											className="col-xs-6 col-sm-6 col-md-2 col-lg-2" label="Automobile" primary={true}/>
				</div>
			</nav>
		)
	}
}
