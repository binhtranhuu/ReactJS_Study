import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    EditData = () => {
        this.props.isEdit();
        this.props.dataEdit(this.props.note);
    }

    render() {
        return (
            <div className="card mb-1">
                <div className="card-header" id="heading">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse-" + this.props.number} aria-expanded="true" aria-controls="collapse">
                            {this.props.noteTitle}
                        </button>
                        <div className="float-right btn-group">
                            <button onClick={() => this.EditData()} className="btn btn-primary">Sửa</button>
                            <button onClick={() => this.props.dataDelete(this.props.id)} className="btn btn-danger">Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"collapse-" + this.props.number} className="collapse" aria-labelledby="heading" data-parent="#accordion">
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
        // prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        isEdit: () => {
            dispatch({
                type: "EDIT_NOTE_STATUS"
            })
        },
        dataEdit: (getEdit) => {
            dispatch({
                type: "GET_DATA_EDIT",
                getEdit
            })
        },
        dataDelete: (getDelete) => {
            dispatch({
                type: "GET_DATA_DELETE",
                getDelete
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);