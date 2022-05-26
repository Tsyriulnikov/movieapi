import {SearchType} from "../types/movie-types";

export type MovieActionType = SetSearchResponseActionType|SetSearchMoviesErrorActionType


type SetSearchResponseActionType = ReturnType<typeof setSearchResponse>
export const setSearchResponse = ({Search,  totalResults, Response}: any) => {
    return {
        type: "SET-SEARCH-RESPONSE",
        payload: {
            post: Search,
            totalResults: totalResults,
            response: Response,
        },
    } as const
}
type SetSearchMoviesErrorActionType = ReturnType<typeof setSearchMoviesError>
export const setSearchMoviesError = (error:null) => {
    return {
        type: "SET-SEARCH-MOVIES-ERROR",
        payload: {
            error,
        },
    } as const
}