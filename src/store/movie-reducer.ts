
import {SearchType, StateType} from "../types/movie-types";
import {MovieActionType} from "../actions/actions";



const initState: StateType = {
    data:{
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

            return {...state, data:{...state.data,search:action.payload.search, totalResults:action.payload.totalResults,
                    response:action.payload.response}}
        };

        case 'SET-SEARCH-MOVIES-ERROR': {

            return {...state}
        }
        default:
            return {...state}
    }
}

