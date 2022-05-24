// import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {movieReducer} from "./movie-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    movie: movieReducer,

})
//Для DEVTools  Redux
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//


const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
