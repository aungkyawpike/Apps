import React from 'react'
import ReactDOM from "react-dom"
import AutoComplete from 'material-ui/AutoComplete'

export default class Search extends React.Component {

	constructor() {
		super()

		this.state = {
			searchKeyWord: []
		}
	}

	handleUpdateInput = (text) => {
		this.setState({searchKeyWord: [text]})
	}

	render() {
		return (
		<AutoComplete
			hintText="Search"
			dataSource={this.state.searchKeyWord}
			onUpdateInput={this.handleUpdateInput}
			floatingLabelText="Search"
			fullWidth={true}
		/>
		)
	}
}
