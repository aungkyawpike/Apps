import dispatcher from "../dispatcher/dispatcher";

export function getBusinessCategories(requestObj){
    dispatcher.dispatch({type:"GET_BUSINESS_CATEGORIES", data: requestObj});
}



