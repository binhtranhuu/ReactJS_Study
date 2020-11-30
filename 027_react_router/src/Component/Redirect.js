import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Category from './Category';
import Contact from './Contact';
import Content from './Content';
import Home from './Home';

class Redirect extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/tin-tuc/:slug.:id.html" component={Content} />
                    <Route exact path="/content" component={Content} />
                    <Route exact path="/contact" component={Contact} />
                </div>
        );
    }
}

export default Redirect;