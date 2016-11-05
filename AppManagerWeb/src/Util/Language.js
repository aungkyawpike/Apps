import $ from "jquery"
import LanguageStore from '../stores/LanguageStore'
import CriteriaStore from '../stores/CriteriaStore'

export function langLozalization(phrase){

	var translation = LanguageStore.state.lang
	var lang = phrase

	//for (var key in translation){ var found = true; break;}

	if(translation.hasOwnProperty(phrase.toLowerCase())) {var found = true}

	if(found)
		lang = translation[phrase.toLowerCase()][CriteriaStore.language] 


	return lang != "" ? lang : phrase

}