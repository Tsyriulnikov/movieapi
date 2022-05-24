import {movieApi, SearchType} from "../api/movie-api";
import {Dispatch} from "redux";


export type StateType={
    searchValue: string,
    loading: boolean,
    movies:ResponseType,
    activePage: number,
    totalPages: number,
    error:null|string,
}

export type ResponseType = {
    search: Array<SearchType>
    totalResults: string,
    response: string
  }


const initState: StateType = {
    searchValue: '',
    loading: false,
    activePage: 1,
    totalPages: 0,
    error:null


}


export const movieReducer = (state: StateType = initState, action: MovieActionType): StateType => {
    switch (action.type) {
        case 'SET-SEARCH-RESPONSE': {
            return {...state,movies:action.payload.data}
        }

        default:
            return {...state}
    }
}


// Action creators

type MovieActionType = SetSearchResponseActionType


type SetSearchResponseActionType = ReturnType<typeof setSearchResponse>
export const setSearchResponse = (data:ResponseType) => {
    return {
        type: "SET-SEARCH-RESPONSE",
        payload: {
            data,
        },
    } as const
}

// export const itemsLoadedAC = (items) => {type:'items-loaded',items};
// export const changeStatusAC = (status) => {type:'status-changed',status};
// export const setErrorAC = (error) => {type:'error-changed',error};

// export const loadItemsTC = (categoryId)=>(dispatch)=>{
//     dispatch(changeStatusAC('loading'))
//     dispatch(setErrorAC(null))
//     api.loadItems(categoryId).then((res) => {
//         // dispatch(changeStatusAC('succes'))
//         dispatch(itemsLoadedAC(res.data))
//     }).catch(err=>{
//         // dispatch(changeStatusAC('error'))
//         dispatch(setErrorAC(err))
//     }).finally(()=>dispatch(changeStatusAC('idle')))
// }

export const setTodosThunk=()=>(dispatch:Dispatch)=>{
movieApi.getMovie("war")
    .then((res)=>{

        dispatch(setSearchResponse(res.data))
    })

}