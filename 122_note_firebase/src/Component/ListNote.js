import React, { Component } from 'react';
import { connect } from 'react-redux';
import dataNote from '../firebaseConfig';
import NoteItem from './NoteItem';

class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }


    componentWillMount() {
        dataNote.on('value', (notes) => {
            var arrNote = [];
            notes.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                arrNote.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            });
            this.setState({
                dataFirebase: arrNote
            });
        })
    }

    getNoteData = () => {
        return this.state.dataFirebase.map((value, key) => {
            return (
                <NoteItem
                    note={value}
                    key={key}
                    id={value.id}
                    noteTitle={value.noteTitle}
                    noteContent={value.noteContent}
                />
            )
        })
    }

    isShowFormAdd = () => {
        if(this.props.isShowFormAdd === false ) {
            return <button onClick={() => this.props.isShowForm()} className="btn btn-outline-success mb-3">Thêm mới</button>
        } else {
            return <button onClick={() => this.props.isShowForm()} className="btn btn-outline-secondary mb-3">Đóng</button>
        }
    }

    render() {
        return (
            <div className="col">
                <h2>Danh sách các note</h2>
                {
                    this.isShowFormAdd()
                }
                <div id="accordion">
                    {
                        this.getNoteData()
                    }
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isShowFormAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        isShowForm: () => {
            dispatch({
                type: "CHANGE_ADD_STATUS"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNote)