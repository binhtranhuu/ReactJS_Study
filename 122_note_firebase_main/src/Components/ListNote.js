import React, { Component } from 'react';
import { connect } from 'react-redux';
import noteData from '../firebaseConfig';
import NoteItem from './NoteItem';

class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }

    isAdd = () => {
        if(this.props.isShowAdd === true ){
            return <button onClick={() => this.props.isAdd()} className="btn btn-outline-secondary mb-3">Đóng</button>
        } else {
            return <button onClick={() => this.props.isAdd()} className="btn btn-outline-success mb-3">Thêm mới</button>
        }
    }

    
    componentWillMount() {
        noteData.on('value', (notes) => {
            var arrNote = [];
            notes.forEach(element => {
                const key = element.key
                const noteTitle = element.val().noteTitle
                const noteContent = element.val().noteContent

                arrNote.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            });
            this.setState({
                dataFirebase: arrNote
            });
        } )
    }

    render() {
        return (
            <div className="col">
                <h2>Danh sách các note</h2>
                {
                    this.isAdd()
                }
                <div id="accordion">
                    {
                        this.state.dataFirebase.map((value, key) => {
                            return <NoteItem
                            note={value}
                            key={key}
                            number={key}
                            id={value.id}
                            noteTitle={value.noteTitle}
                            noteContent={value.noteContent}
                            />
                        })
                    }
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isShowAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        isAdd: () => {
            dispatch({
                type: "ADD_NOTE_STATUS"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNote);