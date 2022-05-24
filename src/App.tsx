import React from 'react';
import './App.css';
import {movieApi} from "./api/movie-api";
import {useDispatch} from "react-redux";
import {setTodosThunk} from "./store/movie-reducer";

function App() {
const dispatch=useDispatch()

//   const searchFilm = async () => {
//     try {
//       const {data} = await movieApi.getMovie('war');
//       // const {Search, Error, Response} = data;
//     //   if (Response === 'True') {
//     //     setSerachResult(JSON.stringify(Search));
//     //   } else {
//     //     setSerachResult(Error);
//     //   }
//     dispatch(setSearchResponse(data))
//      } catch (e) {
//       console.log(e);
//      }
//
// };

const searchFilm = ()=>{
setTodosThunk()
}


  return (
    <div className="App">

      <button onClick={searchFilm}>Search</button>


    </div>
  );
}

export default App;
