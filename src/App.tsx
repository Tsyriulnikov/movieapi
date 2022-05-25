import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { searchMoviesThunk} from "./thunk/thunk";
import {AppStoreType} from "./store/store";
import {SearchType, StateType} from "./types/movie-types";

function App() {
const dispatch=useDispatch()
let response=useSelector<AppStoreType,Array<SearchType>>(state => state.movie.data.Search)

const searchFilms = ()=>{
        dispatch(searchMoviesThunk('war') as any )
}
 console.log(JSON.stringify(response))

  return (
    <div className="App">

      <button onClick={searchFilms}>Search</button>
        {JSON.stringify(response)}
    </div>
  );
}

export default App;
