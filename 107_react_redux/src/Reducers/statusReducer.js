const statusInitialState = true
const statusReducer = (state = statusInitialState, action) => {
    switch (action.type) {
        case "EDIT":
            return !state
        default:
            return state
    }
}

export default statusReducer;