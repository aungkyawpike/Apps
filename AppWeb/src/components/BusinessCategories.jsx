import React from 'react'
import ReactDOM from 'react-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import BusinessCategoriesStore from "../stores/BusinessCategoriesStore"

export default class BusinessCategories extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			businessCategories: BusinessCategoriesStore.getBusinessCategories(),
			selectedBusiness: this.props.selectedBusiness
		}
	}

	componentWillMount = () => {
		BusinessCategoriesStore.on('change', this.onChange)
	}

	componentWillUnmount = () => {
		BusinessCategoriesStore.removeListener('change', this.onChange);
	}

	onChange = () => {
		this.state = {
			businessCategories: BusinessCategoriesStore.getBusinessCategories()
		}
	}

	recursiveProcess = (categories, listItems)=> {
		for (var category of categories) {
			let nestedItemsList = []
			if (category.subCategories.length > 0) {
				this.recursiveProcess(category.subCategories, nestedItemsList)
			}
			listItems.push(<ListItem style={{fontSize:13}} key={category.id} primaryText={category.name}
															 primaryTogglesNestedList={true}
															 nestedItems={nestedItemsList}/>)
		}
	}

	render() {

		//let listItems = []
		//this.state.businessCategories.forEach((category, i)=> {
		//	let nestedItemsList = []
		//	category.subCategories.forEach((subCategory, j)=> {
		//		nestedItemsList.push(<ListItem style={{fontSize:13}}  key={subCategory.id} primaryText={subCategory.name}/>)
		//	})
		//	listItems.push(<ListItem style={{fontSize:13}} key={category.id} primaryText={category.name} primaryTogglesNestedList={true}
		//													 nestedItems={nestedItemsList}/>)
		//})

		let listItems = []

		this.recursiveProcess(this.state.businessCategories.product, listItems)

		return (
			<Card>
				<CardHeader
					title="Product"
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
