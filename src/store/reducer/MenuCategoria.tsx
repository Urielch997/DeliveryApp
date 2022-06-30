const initialState = [{}]

const MenuCategoriaReducer = (state = initialState,action:string) =>{
    switch (action) {
        case 'GET_CATEGORIA':
            return {
                state:{...state}
            }    
        default:
            break;
    }
}

export default MenuCategoriaReducer;