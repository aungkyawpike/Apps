import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import ListExampleSelectable from '../components/ListExampleSelectable'

export default class NestedList extends React.Component {

	constructor(props) {
		super(props)
		this.state = {selectedIndex: 1}
	}

	componentWillMount() {
		this.setState({
			selectedIndex: 1
		})
	}

	handleRequestChange = (event, index) => {
		this.setState({
			selectedIndex: index
		})
	}

	recursiveProcess = (dataList, subDataListName, listItems)=> {
		for (var dataItem of dataList) {
			let nestedListItems = []
			if (dataItem[subDataListName].length > 0) {
				this.recursiveProcess(dataItem[subDataListName], subDataListName, nestedListItems)
			}
			listItems.push(<ListItem value={dataItem.id} key={dataItem.id} style={{fontSize:13}} primaryText={dataItem.name}
															 primaryTogglesNestedList={true}
															 nestedItems={nestedListItems}/>)
		}
	}

	render() {

		let listItems = []

		this.recursiveProcess(this.props.nestedListData.dataList, this.props.nestedListData.subDataListName, listItems)

		return (
			<Card>
				<CardHeader
					title={this.props.nestedListData.title}
					actAsExpander={true}
					showExpandableButton={true}
					titleStyle={{fontSize:13}}
				/>
				<CardActions expandable={true}>
								<ListExampleSelectable/>
				</CardActions>
			</Card>

		)
	}

}
