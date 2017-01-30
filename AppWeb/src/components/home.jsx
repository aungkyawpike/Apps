import React from 'react'
import ReactDOM from "react-dom"
import Header from '../components/Header'
import BusinessMenu from '../components/BusinessMenu'

export default class Home extends React.Component {

	constructor(){
		super()

		this.state = {
				items : []
		};
	}

	render() {

		return(
			<div>
				<Header/>
				<BusinessMenu/>
			</div>
		)
	}

}
