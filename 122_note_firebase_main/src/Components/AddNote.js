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

    getData = () => {
        var item = {};
        item.noteTitle = this.state.noteTitle;
        item.noteContent = this.state.noteContent;

        this.props.getNote(item);
    }


    render() {
        return (
            <div className="col-md-3">
                <h2>Thêm mới note</h2>
                <form>
                    <div className="form-group">
                        <label>Nhập tiêu đề</label>
                        <input onChange={(event) => this.isChange(event)} name="noteTitle" type="text" className="form-control" placeholder="Nhập tiêu đề" />
                    </div>
                    <div className="form-group">
                        <label>Nhập nội dung</label>
                        <textarea onChange={(event) => this.isChange(event)} name="noteContent" className="form-control" id="noidung" rows={5} placeholder="Nhập nội dung" required="required" defaultValue={""} />
                    </div>
                    <button onClick={() => this.getData()} type="button" className="btn btn-primary btn-block">Thêm mới</button>
                </form>
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
        getNote: (noteData) => {
            dispatch({
                type: "GET_DATA_NOTE",
                noteData
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);