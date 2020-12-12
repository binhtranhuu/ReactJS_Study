import React, { Component } from 'react';
import { Alert } from 'react-bs-notifier';
import { connect } from 'react-redux';
import AddNote from './Component/AddNote';
import AlertInfo from './Component/AlertInfo';
import EditNote from './Component/EditNote';
import Header from './Component/Header';
import ListNote from './Component/ListNote';

class App extends Component {

  isShowFormEdit = () => {
    if(this.props.isEdit === true) {
      return <EditNote />
    }
  }

  isShowFormAdd = () => {
    if(this.props.isAdd === true) {
      return <AddNote />
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AlertInfo />
        {
          this.isShowFormEdit()
        }
        <div className="container mt-3">
          <div className="row">
            <ListNote />
            {
              this.isShowFormAdd()
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
    isAdd: state.isAdd
  }
}

export default connect(mapStateToProps)(App);