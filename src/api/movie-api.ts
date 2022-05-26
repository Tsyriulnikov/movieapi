import axios from "axios";
import {SearchType,ResponseType} from "../types/movie-types";


const instanse = axios.create({
    baseURL: 'http://www.omdbapi.com',
    // withCredentials: true,
})
const key = '/?apikey=995f97b1';


export const movieApi = {
    getMovie(title: string) {
        const query = `${key}&s=${title}`;
        return instanse.get<ResponseType<{item:SearchType}>>(query)
    },
}

