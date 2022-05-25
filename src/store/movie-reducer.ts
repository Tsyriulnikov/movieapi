
import {StateType} from "../types/movie-types";
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
            return {...state, data:{...state.data, data.search:action.payload.data}}
        };

        case 'SET-SEARCH-MOVIES-ERROR': {

            return {...state}
        }
        default:
            return {...state}
    }
}

