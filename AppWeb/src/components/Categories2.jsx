import React from 'react'
import ReactDOM from "react-dom"
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import FontIcon from 'material-ui/FontIcon'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CategoriesStore from "../stores/CategoriesStore"
import MenuItem from 'material-ui/MenuItem'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'
const devicehubIcon = <FontIcon className="material-icons">device_hub</FontIcon>
const toysIcon = <FontIcon className="material-icons">toys</FontIcon>
const listIcon = <FontIcon className="material-icons">list</FontIcon>

export default class Categories extends React.Component {

	constructor() {
		super()

		this.state = {
			selectedBusiness : 0,
			categories: CategoriesStore.getCategories(),
			drawerOpen : false,
			sortType : 1,
			dataSource: []
		}
	}

	select = (business) => this.setState({selectedBusiness: business})

	handleDrawerToggle = () => {
		this.setState({drawerOpen: !this.state.drawerOpen})
	}

	handleDrawerClose = () => {
		this.setState({drawerOpen: false})
	}

	handleDrawerOnRequestChange = (open) => {
		this.setState({drawerOpen: open})
	}

	handleUpdateInput = (text) => {
		this.setState({dataSource: [text]})
	}

	handleSortTypeChange = (event, index, sortType) =>{
		this.setState({sortType: sortType})
	}

	render() {
		let listItems = []
		this.state.businessCategories.forEach((category, i)=>{
			let nestedItemsList = []
			category.subCategories.forEach((subCategory,j)=>{
				nestedItemsList.push(<ListItem key={subCategory.id} primaryText={subCategory.name}/>)
			})
			listItems.push(<ListItem key={category.id} primaryText={category.name} primaryTogglesNestedList={true} nestedItems={nestedItemsList}/>)
		})
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
			  <div>
					<AppBar
						style={{position:"fixed",backgroundColor:'white', height:50}}
						iconElementLeft={<FlatButton onTouchTap={this.handleDrawerToggle} icon={listIcon}	/>}
					/>
					<Drawer docked={false} open={this.state.drawerOpen} onRequestChange={this.handleDrawerOnRequestChange}>
						<Tabs>
							<Tab icon={<FontIcon className="material-icons">add_shopping_cart</FontIcon>} title="Products">
								<Card>
									<CardHeader
										title="Products Categroies"
										actAsExpander={true}
										showExpandableButton={true}
									/>
									<CardActions expandable={true}>
										<List>
											{listItems}
										</List>
									</CardActions>
								</Card>
								<Card>
									<CardHeader
										title="Filters"
										actAsExpander={true}
										showExpandableButton={true}
									/>
									<CardActions expandable={true}>
										<DropDownMenu value={this.state.sortType} onChange={this.handleSortTypeChange}>
											<MenuItem value={1} primaryText="Most Recent" />
											<MenuItem value={2} primaryText="Low Prices" />
											<MenuItem value={3} primaryText="High Prices" />
										</DropDownMenu>
									</CardActions>
								</Card>
								<AutoComplete
									hintText="Search"
									dataSource={this.state.dataSource}
									onUpdateInput={this.handleUpdateInput}
									floatingLabelText="Search Within Products"
									fullWidth={true}
								/>
								<RaisedButton
									label="Go"
									labelPosition="before"
									primary={true}
								/>
							</Tab>
							<Tab icon={<FontIcon className="material-icons">build</FontIcon>} title="Services">
								<List>
									{listItems}
								</List>
							</Tab>
							<Tab icon={<FontIcon className="material-icons">accessibility</FontIcon>} title="Jobs">
								<List>
									{listItems}
								</List>
							</Tab>
							<Tab  icon={<FontIcon className="material-icons">account_balance</FontIcon>} title="Properties">
								<List>
									{listItems}
								</List>
							</Tab>
							<Tab icon={<FontIcon className="material-icons">directions_car</FontIcon>} title="Automobiles">
								<List>
									{listItems}
								</List>
							</Tab>
						</Tabs>
					</Drawer>
			  </div>
			</MuiThemeProvider>
		)
	}
}
