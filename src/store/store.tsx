import { combineReducers } from 'redux';
import MenuCategoriaReducer from './actions/MenuCategoria';

const Reducers = combineReducers({
    getCatgoria:MenuCategoriaReducer
})

export default Reducers;