const initialState = [{}]

const ShoopingCartActions = (state = initialState,action:string) =>{
    switch (action) {
        case 'ADD_PRODUCT':
            return {
                state:{...state}
            }    
        default:
            break;
    }
}

export default ShoopingCartActions;