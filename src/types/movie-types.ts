
export type StateType={
    data:ResponseType,
    searchValue: string,
    loading: boolean,
    activePage: number,
    totalPages: number,
    error:null|string,
}

export type ResponseType<D = {}> = {
    data: D
    totalResults: string,
    Response: string
}

export type SearchType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}
