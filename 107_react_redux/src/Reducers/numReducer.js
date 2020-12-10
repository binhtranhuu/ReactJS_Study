const numInitialState = [1, 2, 3, 4, 5, 6];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD":
            return [ ...state, action.addItem ]
        case "DELETE":
            return [ state.filter((value, key) => key !== action.deleteItem) ]
        default:
            return state
    }
}

export default numReducer;