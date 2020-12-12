import dataNote from './firebaseConfig';

var redux = require('redux');

const noteInitialState = {
    isAdd: false,
    isEdit: false,
    getEditNoteData: {},
    alertShow: false,
    alertContent: "",
    alertType: ""
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            dataNote.push(action.getItem);
            // alert("Thêm mới NOTE thành công");
            return {...state, isEdit: false}
        case "CHANGE_EDIT_STATUS":
            return {...state, isEdit: !state.isEdit}
        case "CHANGE_ADD_STATUS":
            return {...state, isAdd: !state.isAdd}
        case "GET_EDIT_NOTE_DATA":
            return {...state, getEditNoteData: action.getEditNoteData}
        case "GIVE_EDIT_NOTE_DATA":
            dataNote.child(action.giveEditNoteData.id).update({
                noteTitle: action.giveEditNoteData.noteTitle,
                noteContent: action.giveEditNoteData.noteContent
            })
            // alert("Cập nhật NOTE thành công");
            return {...state, getEditNoteData: {}}
        case "DELETE_NOTE_DATA":
            dataNote.child(action.getIdNoteData).remove();
            // alert("Xóa NOTE thành công");
        case "ALERT_ON":
            return {...state, alertShow: true, alertContent: action.alertContent, alertType: action.alertType}
        case "ALERT_OFF":
            return {...state, alertShow: false}
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

// store.subscribe(() => {
//     console.log(JSON.stringify(store.getState()));
// })

export default store;