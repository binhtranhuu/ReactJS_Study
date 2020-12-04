import React, { Component } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import TableData from './Components/TableData';
import Data from './../src/Data/Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiHienThi: false,
      data: Data
    }

  }
  ketNoi = () => {
    this.setState({
      trangThaiHienThi: !this.state.trangThaiHienThi
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      textSearch: dl
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
          <SearchForm checkConnection={(dl) => this.getTextSearch(dl)} Connect={() => this.ketNoi()} hienThiForm={this.state.trangThaiHienThi}></SearchForm>
          <div className="row">
            <TableData dataUser={arrSearch}></TableData>
            <AddUser hienThiForm={this.state.trangThaiHienThi}></AddUser>
          </div>
        </div>
      </div>
    );
  }
}

export default App;