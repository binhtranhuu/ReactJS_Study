import numReducer from './Reducers/numReducer';
import statusReducer from './Reducers/statusReducer';

var redux = require('redux');

const allReducer = redux.combineReducers({
    num: numReducer,
    status: statusReducer
})

var store1 = redux.createStore(allReducer);
store1.subscribe(() => {
    console.log(store1.getState());
});

store1.dispatch({
    type: "EDIT",
});

store1.dispatch({
    type: "ADD",
    addItem: 7
});

store1.dispatch({
    type: "DELETE",
    deleteItem: 0
});

export default store1;