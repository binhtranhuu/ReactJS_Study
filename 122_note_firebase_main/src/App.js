import React, { Component } from 'react';
import Header from './Components/Header';
import ListNote from './Components/ListNote';
import AddNote from './Components/AddNote';
import { connect } from 'react-redux';
import EditNote from './Components/EditNote';

class App extends Component {

  isAdd = () => {
    if(this.props.isAdd === true) {
      return <AddNote />
    }
  }

  isEdit = () => {
    if(this.props.isEdit === true) {
      return <EditNote />
    }
  }

  render() {
    return (
      <div className="Note">
        <Header />
        {
          this.isEdit()
        }
        <div className="container mt-3">
          <div className="row">
              <ListNote />
              {
                this.isAdd()
              }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAdd: state.isAdd,
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showEditForm: () => {
      dispatch({
        type: "EDIT_NOTE_STATUS"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);