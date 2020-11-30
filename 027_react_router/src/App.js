import React, { Component } from 'react';
import Menu from './Component/Menu';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Category from './Component/Category';
import Content from './Component/Content';
import Contact from './Component/Contact';
import Redirect from './Component/Redirect';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="my-blog">
          <Menu />
          <Redirect />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
