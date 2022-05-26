
import {SearchType, StateType} from "../types/movie-types";
import {MovieActionType} from "../actions/actions";



const initState: StateType = {
    data:{
        data:[],
        totalResults: '',
        Response: '',
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
            let post:Array<SearchType> = action.payload.post
            let totalResults:string = action.payload.totalResults
            let respons:string = action.payload.response
            return {...state, data:{...state.data,data:post, totalResults:totalResults, Response:respons}}
        };

        case 'SET-SEARCH-MOVIES-ERROR': {

            return {...state}
        }
        default:
            return {...state}
    }
}

