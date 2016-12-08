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
import injectTapEventPlugin from 'react-tap-event-plugin'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import AppBar from 'material-ui/AppBar'
const devicehubIcon = <FontIcon className="material-icons">device_hub</FontIcon>
const toysIcon = <FontIcon className="material-icons">toys</FontIcon>
const listIcon = <FontIcon className="material-icons">list</FontIcon>
injectTapEventPlugin()

export default class Categories extends React.Component {

	constructor() {
		super()

		this.state = {
			selectedBusiness : 0,
			categories: CategoriesStore.getCategories(),
			drawerOpen : false
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

	render() {
		let listItems = []
		this.state.categories.forEach((category,i)=>{
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
						<BottomNavigation selectedIndex={this.state.selectedBusiness}>
							<BottomNavigationItem
								label="Products"
								icon={devicehubIcon}
								onTouchTap={() => this.select(0)}
							/>
							<BottomNavigationItem
								label="Services"
								icon={toysIcon}
								onTouchTap={() => this.select(1)}
							/>
						</BottomNavigation>
			  		<List>
			  			{listItems}
			  		</List>
			  	</Drawer>
			  </div>
			</MuiThemeProvider>
		)
	}
}
