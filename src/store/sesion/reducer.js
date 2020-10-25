const initialState = {sesion: " "};

export default (state = initialState, action) => {
    if(action.type === 'ADD_SESION'){
        return{
            ... state,
            sesion:action.payload
        }
    }

    return state;
};

export const addsesion = state => state.sesionadd.sesion;