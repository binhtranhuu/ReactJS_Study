import noteData from './../firebaseConfig';
var redux = require('redux');

const noteInitialState = {
    isAdd: false,
    isEdit: false,
    dataEdit: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE_STATUS":
            return {...state, isAdd: !state.isAdd}
        case "EDIT_NOTE_STATUS":
            return {...state, isEdit: !state.isEdit}
        case "GET_DATA_NOTE":
            noteData.push(action.noteData);
            break;
        case "GET_DATA_EDIT":
            return {...state, dataEdit: action.getEdit}
        case "GIVE_DATA_EDIT":
            noteData.child(action.giveDataEdit.id).update({
                noteTitle: action.giveDataEdit.noteTitle,
                noteContent: action.giveDataEdit.noteContent
            })
            break;
        case "GET_DATA_DELETE":
            noteData.child(action.getDelete).remove();
            break;
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;