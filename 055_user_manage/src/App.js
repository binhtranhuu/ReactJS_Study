import React, { Component } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import TableData from './Components/TableData';
import Data from './../src/Data/Data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiHienThi: false,
      data: Data,
      textSearch: '',
      editUserStatus: false,
      userEditObject: {}
    }

  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  ketNoi = () => {
    this.setState({
      trangThaiHienThi: !this.state.trangThaiHienThi
    });
  }

  getNewUserData = (name, phone, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = permission;

    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      textSearch: dl
    });
  }

  editUserData = (user) => {
    this.setState({
      userEditObject: user
    });
  }

  deleteUserClick = (idUser) => {
    var tmpData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tmpData
    });
  }
  render() {
    var arrSearch = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.textSearch) !== -1){
        arrSearch.push(item);
      }
    })
    return (
      <div className="NhanSu">
        <div className="container my-1">
          <Header></Header>
          <SearchForm getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} userEditObject={() => this.state.userEditObject} changeEditUserStatus={() => this.changeEditUserStatus()} editUserStatus={() => this.state.editUserStatus} checkConnection={(dl) => this.getTextSearch(dl)} Connect={() => this.ketNoi()} hienThiForm={this.state.trangThaiHienThi}></SearchForm>
          <div className="row">
            <TableData deleteUserClick={(idUser) => this.deleteUserClick(idUser)} changeEditUserStatus={() => this.changeEditUserStatus()} Edit={(user) => this.editUserData(user)} dataUser={arrSearch}></TableData>
            <AddUser Add={(name, phone, permission) => this.getNewUserData(name, phone, permission)} hienThiForm={this.state.trangThaiHienThi}></AddUser>
          </div>
        </div>
      </div>
    );
  }
}

export default App;