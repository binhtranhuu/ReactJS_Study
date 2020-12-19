import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.dataEdit.id,
            noteTitle: this.props.dataEdit.noteTitle,
            noteContent: this.props.dataEdit.noteContent
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveNote = () => {
        var item = {};
        item.id = this.state.id;
        item.noteTitle = this.state.noteTitle;
        item.noteContent = this.state.noteContent;

        this.props.changeEditStatus();
        this.props.saveNoteEdit(item);
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Sửa note</h2>
                        <form>
                            <div className="form-group">
                                <label>Nhập tiêu đề</label>
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.dataEdit.noteTitle} name="noteTitle" type="text" className="form-control" placeholder="Nhập tiêu đề" />
                            </div>
                            <div className="form-group">
                                <label>Nhập nội dung</label>
                                <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.dataEdit.noteContent} name="noteContent" className="form-control" id="noidung" rows={5} placeholder="Nhập nội dung" required="required"></textarea>
                            </div>
                            <button onClick={() => this.saveNote()} type="button" className="btn btn-outline-primary btn-block">Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dataEdit: state.dataEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "EDIT_NOTE_STATUS"
            })
        },
        saveNoteEdit: (giveDataEdit) => {
            dispatch({
                type: "GIVE_DATA_EDIT",
                giveDataEdit
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);