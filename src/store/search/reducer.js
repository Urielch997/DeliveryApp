const initialState = {search:" "};


export default (state = initialState, action) => {
    if(action.type == 'UPDATE_SEARCH'){
        return{
            ... state,
            search:action.payload
        }
    }

    return state;
};

export const selectActiveSearch = state => state.searchReducer.search;