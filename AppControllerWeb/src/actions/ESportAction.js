import dispatcher from "../dispatcher/dispatcher";

export function searchMatch(searchStr){

    dispatcher.dispatch({type:"SEARCH_LEAGUE", searchStr});

}

export function selectMatchesByLeague(leagudID, pageRange){

    dispatcher.dispatch({type:"SELECT_LEAGUE", leagudID, pageRange});

}

export function filterPage(min, max){

    dispatcher.dispatch({type:"PAGE_CHANGE", min:min, max:max});

}



export function mockPush(data){

    dispatcher.dispatch({type:"MOCK_PUSH", data : data});

}


