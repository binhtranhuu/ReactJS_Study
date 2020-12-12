import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteContent: ""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    noteData = () => {
        var item = {};
        item.noteTitle = this.state.noteTitle;
        item.noteContent = this.state.noteContent;
        
        this.props.addNoteData(item);
        this.props.alertOn("Thêm mới NOTE thành công", "success");
    }

    render() {
        return (
            <div className="col-md-3">
                <h2>Thêm mới note</h2>
                <form>
                    <div className="form-group">
                        <label>Nhập tiêu đề</label>
                        <input onChange={(event) => this.isChange(event)} name="noteTitle" required type="text" className="form-control" placeholder="Nhập tiêu đề" />
                    </div>
                    <div className="form-group">
                        <label>Nhập nội dung</label>
                        <textarea  onChange={(event) => this.isChange(event)} name="noteContent" className="form-control" id="noidung" rows={5} placeholder="Nhập nội dung" required defaultValue={""} />
                    </div>
                    <button onClick={() => this.noteData()} type="reset" className="btn btn-primary btn-block">Thêm mới</button>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNoteData: (getItem) => {
            dispatch({
                type: "ADD_DATA",
                getItem
            })
        },
        alertOn: (alertContent, alertType) => {
            dispatch({
                type: "ALERT_ON",
                alertContent,
                alertType
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF",
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)