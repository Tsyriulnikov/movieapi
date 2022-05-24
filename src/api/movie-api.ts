import axios from "axios";

export type SearchType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

const instanse = axios.create({
    baseURL: 'http://www.omdbapi.com',
    withCredentials: true,
})
const key = '/?apikey=995f97b1';


export const movieApi = {
    getTodoLists(title: string) {
        const query = `${key}&s=${title}`;
        return instanse.get<Array<SearchType>>(query)
    },
}

