import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Search from './Components/Search';
import Tables from './Components/Tables';
import AddUser from './Components/AddUser';
import Data from './../src/Data/Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      displayFormAddUser: false,
      textSearch: "",
      displayFormEditUser: false,
      userEditObject: {}
    }
  }

  changeDisplayFormAddUser = () => {
    this.setState({
      displayFormAddUser: !this.state.displayFormAddUser
    });
  }

  getDataSearch = (data) => {
    this.setState({
      textSearch: data
    });
  }

  getNewUserData = (name, phone, permission) => {
    var item = {};
    item.id = "";
    item.name = name;
    item.phone = phone;
    item.permission = permission;

    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
  }

  displayFormEditUser = () => {
    this.setState({
      displayFormEditUser: !this.state.displayFormEditUser
    });
  }

  editUserData = (data) => {
    this.setState({
      userEditObject: data
    });
  }

  saveEditUserData = (info) => {
    this.state.data.forEach((value) => {
      if(value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })
  }

  deleteUserData = (info) => {
    var tmpData = this.state.data.filter(item => item.id !== info.id)
    this.setState({
      data: tmpData
    });
  }
  
  render() {
    var arrSearch = [];
    this.state.data.forEach((value) => {
      if(value.name.indexOf(this.state.textSearch) !== -1){
        arrSearch.push(value);
      }
    })
    return (
      <div className="container my-1">
        <Header />
        <Search 
        displayFormAddUser={this.state.displayFormAddUser}
        changeDisplayFormAddUser={() => this.changeDisplayFormAddUser()}
        getDataSearch={(data) => this.getDataSearch(data)}
        displayFormEditUser={this.state.displayFormEditUser}
        statusDisplayFormEditUser={() => this.displayFormEditUser()}
        editUserData = {() => this.state.userEditObject}
        saveEditUserData = {(info) => this.saveEditUserData(info)}
        />
        <div className="row">
          <Tables
          dataUsers={arrSearch}
          displayFormEditUser={() => this.displayFormEditUser()}
          editUserData={(data) => this.editUserData(data)}
          deleteUserData={(info) => this.deleteUserData(info)}
          />
          <AddUser
           displayFormAddUser={this.state.displayFormAddUser}
           getNewUserData={(name, phone, permission) => this.getNewUserData(name, phone, permission)}
          />
        </div>
      </div>
    );
  }
}

export default App;
