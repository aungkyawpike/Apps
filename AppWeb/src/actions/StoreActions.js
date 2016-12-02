import dispatcher from "../dispatcher/dispatcher";

export function BetClickUIAction(requestObj){
    dispatcher.dispatch({type:"BET_CLICK", data: requestObj});
}



