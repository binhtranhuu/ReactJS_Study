import React, { Component } from 'react';
import Category from './Category';
import Contact from './Contact';
import Content from './Content';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class DieuHuong extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/content" component={Content} />
                <Route exact path="/tin-tuc/:slug.:id.html" component={Content} />
                <Route exact path="/category" component={Category} />
                <Route exact path="/contact" component={Contact} />
            </div>
        );
    }
}

export default DieuHuong;