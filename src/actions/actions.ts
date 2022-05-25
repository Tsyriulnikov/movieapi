import {ResponseType} from "../types/movie-types";

export type MovieActionType = SetSearchResponseActionType


type SetSearchResponseActionType = ReturnType<typeof setSearchResponse>
export const setSearchResponse = (data:ResponseType) => {
    return {
        type: "SET-SEARCH-RESPONSE",
        payload: {
            data,
        },
    } as const
}