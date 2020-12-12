import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.showEditDataForm.id,
            noteTitle: this.props.showEditDataForm.noteTitle,
            noteContent: this.props.showEditDataForm.noteContent,
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveData = () => {
        this.props.isShowEditForm();

        var info = {};
        info.id = this.state.id;
        info.noteTitle = this.state.noteTitle;
        info.noteContent = this.state.noteContent;

        this.props.giveEditNoteData(info);
        this.props.alertOn("Cập nhật NOTE thành công", "info")
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
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.showEditDataForm.noteTitle} name="noteTitle" type="text" className="form-control" placeholder="Nhập tiêu đề" />
                            </div>
                            <div className="form-group">
                                <label>Nhập nội dung</label>
                                <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.showEditDataForm.noteContent} name="noteContent" className="form-control" id="noidung" rows={5} placeholder="Nhập nội dung" required="required"></textarea>
                            </div>
                            <button onClick={() => this.saveData()} type="button" className="btn btn-outline-success btn-block">Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        saveNoteData: state.isEdit,
        showEditDataForm: state.getEditNoteData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        isShowEditForm: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        giveEditNoteData: (giveEditNoteData) => {
            dispatch({
                type: "GIVE_EDIT_NOTE_DATA",
                giveEditNoteData
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

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)