import {createStore, combineReducers} from 'redux';
import searchReducer from './search/reducer';
import sesionadd from './sesion/reducer';

const reducers = combineReducers({
    searchReducer,
    sesionadd
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
