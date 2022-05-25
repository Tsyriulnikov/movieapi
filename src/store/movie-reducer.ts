
import {StateType} from "../types/movie-types";
import {MovieActionType} from "../actions/actions";



const initState: StateType = {
    response:{
        search:[],
        totalResults: '',
        response: '',
    },
    searchValue: '',
    loading: false,
    activePage: 1,
    totalPages: 0,
    error:null,
}


export const movieReducer = (state: StateType = initState, action: MovieActionType): StateType => {
    switch (action.type) {
        case 'SET-SEARCH-RESPONSE': {
            return {...state,response:action.payload.data}
        }

        default:
            return {...state}
    }
}

