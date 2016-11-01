class GlobalData {

	get baseURL () { getCurrentBaseURL() } 

	getCurrentBaseURL(){

		return this.props.location.pathname

	}

}  