import axios from "axios";
import {AnyAction, Dispatch} from "redux";
import {movieApi} from "../api/movie-api";
import {setSearchMoviesError, setSearchResponse} from "../actions/actions";

export const searchMoviesThunk = (searchValue: string) => (dispatch: Dispatch) => {
    movieApi.getMovie(searchValue)
        .then((res) => {

            dispatch(setSearchResponse(res.data));
            console.log(res.data)
            // dispatch({type: SET_TOTAL_PAGES, totalPages: Math.ceil(data.totalResults / 10)});
        })
        .catch((error) => {
            dispatch(setSearchMoviesError(error));
        })

}
