
import {SearchType, StateType,ResponseType} from "../types/movie-types";
import {MovieActionType} from "../actions/actions";
import {Search} from "@mui/icons-material";



const initState: StateType = {
    data:{
        Search:[],
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
            let {Search, totalResults, respons}:ResponseType = action.payload.data
            // let post:Array<SearchType> = action.payload.post
            // let totalResults:string = action.payload.totalResults
            // let respons:string = action.payload.response
            return {...state, data:action.payload.data}
        };

        case 'SET-SEARCH-MOVIES-ERROR': {

            return {...state}
        }
        default:
            return {...state}
    }
}

