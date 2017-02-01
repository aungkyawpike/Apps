import dispatcher from "../dispatcher/dispatcher";

export function getPlatformsCategoriesFromService(requestObj){
    dispatcher.dispatch({type:"GET_PLATFORMS_CATEGORIES_FROM_SERVICE", data: requestObj});
}



