import React, { Component } from 'react';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import DataUser from './../../src/Data/Data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showFormAddUser: false,
      textSearch: "",
      showFormEditUser: false,
      editUserData: ""
    }
  }

  
  componentWillMount() {
    if(localStorage.getItem("userData") === null){
      localStorage.setItem("userData", JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      });
    }
  }
  

  changeShowFormAddUser = () => {
    this.setState({
      showFormAddUser: !this.state.showFormAddUser
    });
  }

  getTextSeach = (info) => {
    this.setState({
      textSearch: info
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

    localStorage.setItem("userData", JSON.stringify(this.state.data));
  }

  changeShowFormEditUser = () => {
    this.setState({
      showFormEditUser: !this.state.showFormEditUser
    });
  }

  getEditUserData = (info) => {
    this.setState({
      editUserData: info
    });
  }

  getInfoEditUserData = (info) => {
    this.state.data.forEach((value) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })

    localStorage.setItem("userData", JSON.stringify(this.state.data));
  }

  deleteUserData = (info) => {
    var tmpData = this.state.data.filter(item => item.id !== info.id);
    this.setState({
      data: tmpData
    });

    localStorage.setItem("userData", JSON.stringify(tmpData));
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
        showFormAddUser={this.state.showFormAddUser}
        changeShowFormAddUser={() => this.changeShowFormAddUser()}
        getTextSeach={(info) => this.getTextSeach(info)}
        showFormEditUser={this.state.showFormEditUser}
        changeShowFormEditUser={() => this.changeShowFormEditUser()}
        sendEditUserData={this.state.editUserData}
        getInfoEditUserData={(info) => this.getInfoEditUserData(info)}
        />
        <div className="row">
          <Table
          UserDatas={arrSearch}
          changeShowFormEditUser={() => this.changeShowFormEditUser()}
          getEditUserData={(info) => this.getEditUserData(info)}
          deleteUserData={(info) => this.deleteUserData(info)}
          />
          <AddUser 
          showFormAddUser={this.state.showFormAddUser}
          getNewUserData={(name, phone, permission) => this.getNewUserData(name, phone, permission)}
          />
        </div>
      </div>
    );
  }
}

export default App;
