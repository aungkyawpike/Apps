import React from 'react'
import ReactDOM from "react-dom"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export default class Filter extends React.Component {

	constructor() {
		super()
		this.state = {
			sortType: 1
		}
	}

	handleSortTypeChange = (event, index, sortType) => {
		this.setState({sortType: sortType})
	}

	render() {
		return (
			<Card>
				<CardHeader
					title="Filters"
					actAsExpander={true}
					showExpandableButton={true}
					titleStyle={{fontSize:13}}
				/>
				<CardActions expandable={true}>
					<DropDownMenu value={this.state.sortType} onChange={this.handleSortTypeChange}>
						<MenuItem value={1} primaryText="Most Recent"/>
						<MenuItem value={2} primaryText="Low Prices"/>
						<MenuItem value={3} primaryText="High Prices"/>
					</DropDownMenu>
				</CardActions>
			</Card>
		)
	}
}
