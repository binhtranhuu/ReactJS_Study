import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    showNoteData = () => {
        this.props.showEdit();
        this.props.getEditNoteData(this.props.note)
    }

    deleteData = () => {
        this.props.getIdNoteData(this.props.id);
        this.props.alertOn("Xóa NOTE thành công", "danger");
    }

    render() {
        return (
            <div className="card mb-1">
                <div className="card-header" id="heading">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target={"#number" + this.props.id} aria-expanded="false" aria-controls="collapseTwo">
                            {this.props.noteTitle}
                        </button>
                        <div className="float-right btn-group">
                            <button onClick={() => this.showNoteData()} type="button" className="btn btn-success">Sửa</button>
                            <button onClick={() => this.deleteData()} type="button" className="btn btn-secondary">Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.id} className="collapse" aria-labelledby="heading" data-parent="#accordion">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showEdit: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        getEditNoteData: (getEditNoteData) => {
            dispatch({
                type: "GET_EDIT_NOTE_DATA",
                getEditNoteData
            })
        },
        getIdNoteData: (getIdNoteData) => {
            dispatch({
                type: "DELETE_NOTE_DATA",
                getIdNoteData
            })
        },
        alertOn: (alertContent, alertType) => {
            dispatch({
                type: "ALERT_ON",
                alertContent,
                alertType
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
