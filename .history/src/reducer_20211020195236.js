export const initialState={
    basket: [],
};

function reducer(state, action){
    switc(action.type){
        case 'ADD_TO_BASKET':
            break;
        case 'REMOVE_FROM_BASKET':
            break;
        default:
            return state;
        
    }
}

export default reducer;