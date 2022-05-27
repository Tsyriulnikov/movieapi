import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { searchMoviesThunk} from "./thunk/thunk";
import {AppStoreType} from "./store/store";
import {ResponseType} from "./types/movie-types";

function App() {
const dispatch=useDispatch()
let response=useSelector<AppStoreType,ResponseType>(state => state.movie.data)

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
