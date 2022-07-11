import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import ShoopingCartReducer from './reducer/ShoopingCartReducer';
import thunk from "redux-thunk";
import ProductoReducer from './reducer/ProductoReducer';
import AuthReducer from './reducer/AuthReducer';
import FavoritoReducer from './reducer/FavoritoReducer';

const Reducers = combineReducers({
    favoritos: FavoritoReducer,
    productos:ProductoReducer,
    Auth:AuthReducer
})

  
  const rootReducer =(state:any, action:never)=>{
    return Reducers(state, action)
  }

  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
