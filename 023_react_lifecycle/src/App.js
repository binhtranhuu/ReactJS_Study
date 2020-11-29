import React, { Component } from 'react';
import NoiDung from './NoiDung.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: "khoitao",
      trangthai2: "Test"
    }
  }

  
  componentWillMount() {
    console.log('componentWillMount is running');
  }
  
  componentDidMount() {
    console.log('componentDidMount is running');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate is running');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate is running');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate is running');
  }
  capNhatState = () => {
    this.setState({
      trangthai: "State updated",
      trangthai2: "Tran Huu Binh"
    });
  }
  
  render() {
    console.log('render is running');
    console.log(this.state.trangthai);
    return (
      <div>
        <NoiDung ten={this.state.trangthai2}></NoiDung>
        <button onClick={() => this.capNhatState()}>Click update state</button>
      </div>
    );
  }
}

export default App;
