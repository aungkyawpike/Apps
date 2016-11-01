import React from 'react';
import {render} from "react-dom"
import classNames from "classnames"
import ESport from "./ESport"
import {Link} from 'react-router'
import LanguageStore from '../stores/LanguageStore'
import CriteriaStore from "../stores/CriteriaStore"

export default class Layout extends React.Component {

	constructor(){
		super()
		this.language = LanguageStore.getTranslation()
		this.siteParamLang = this.getQueryStringValue("lang")

		if(this.siteParamLang == "" )
			CriteriaStore.language = 0 //default
		else
			CriteriaStore.language = LanguageStore.getLanguageENum(this.siteParamLang)
		
	}

	getQueryStringValue (key) {  
		return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
	}  
	
	render(){
		return (

				<div>
					{this.props.children}
					<Link to="ESport">ESport</Link><br/>
					<Link to="SingleBet">SingleBet</Link><br/>
				</div>
				
			)

	}

}
       
	


