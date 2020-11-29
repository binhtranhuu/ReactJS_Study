import React, { Component } from 'react';
import Menu from './Component/Menu';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Category from './Component/Category';
import Content from './Component/Content';
import Contact from './Component/Contact';

class App extends Component {
  render() {
    return (
      <div className="my-blog">
        <Menu />
        <Home />
        {/* <Category />
        <Content />
        <Contact /> */}
        <Footer />
      </div>
      
    );
  }
}

export default App;
