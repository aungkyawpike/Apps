import dispatcher from "../dispatcher/dispatcher";

export function BetClickUIAction(requestObj){
    dispatcher.dispatch({type:"BET_CLICK", data: requestObj});
}

export function PlaceBetUIAction(requestObj){
    dispatcher.dispatch({type:"PLACE_BET", data: requestObj});
}

export function AddToComboUIAction(requestObj){
    dispatcher.dispatch({type:"Add_TO_COMBO_BET_CLICK", data: requestObj});
}

export function ComboBetClickUIAction(requestObj){
    dispatcher.dispatch({type:"COMBO_BET_CLICK", data: requestObj});
}

export function ComboPlaceBetUIAction(requestObj){
    dispatcher.dispatch({type:"COMBO_PLACE_BET", data: requestObj});
}


