import React from 'react';
import {render} from "react-dom"

export default class Layout extends React.Component {

	constructor(){
		super()
	}

	render(){
		return (
				<div>
					{this.props.children}
				</div>
			)
	}
}




