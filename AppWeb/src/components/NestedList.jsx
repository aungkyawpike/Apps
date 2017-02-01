import React from 'react'
import ReactDOM from 'react-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'

export default class NestedList extends React.Component {

	constructor(props) {
		super(props)
	}

	recursiveProcess = (dataList,subDataListName, listItems)=> {
		for (var dataItem of dataList) {
			let nestedListItems = []
			if (dataItem[subDataListName].length > 0) {
				this.recursiveProcess(dataItem[subDataListName],subDataListName, nestedListItems)
			}
			listItems.push(<ListItem style={{fontSize:13}} key={dataItem.id} primaryText={dataItem.name}
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
					<List>
						{listItems}
					</List>
				</CardActions>
			</Card>
		)
	}

}
