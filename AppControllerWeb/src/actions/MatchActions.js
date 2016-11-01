import dispatcher from "../dispatcher/dispatcher";

export function createMatch(match){

    dispatcher.dispatch({type:"event", match});

}