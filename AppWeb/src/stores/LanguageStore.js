import React from "react"
import {EventEmitter} from "events"
import dispatcher from "../dispatcher/dispatcher"
import CriteriaStore from "./CriteriaStore"
import * as Util from "../Util/webUtil"
import $ from "jquery"

class LanguageStore extends EventEmitter {

	constructor(){
		super()
		//this.criteria = CriteriaStore.getCriteria()

		this.langCode = {
			'ENG' : 0,
			'CHS' : 1,
			'CHT' : 2
		}

		this.retrievedLanguages = this.retrievedLanguages.bind(this)
		this.getTranslation = this.getTranslation.bind(this)

		this.criteria = CriteriaStore.getCriteria()
		this.state = {
            criteria: this.criteria,
            lang : {}
        }
		
		Util.getAsyncData("GetTranslation",this.criteria,this.retrievedLanguages)
	}

	get siteLanguage() {
		return this.criteria.Language
	}

	getTranslation(){

		return this.state.lang;
	}

	getLanguageENum(langCode){

		return this.langCode[langCode.toUpperCase()]

	}

    retrievedLanguages(data){ 

		if(data != null){
			this.state.lang = data
		}

	} 

} 

const languageStore = new LanguageStore
export default languageStore