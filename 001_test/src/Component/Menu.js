import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <NavLink className="navbar-brand js-scroll-trigger" to="/">Start Bootstrap</NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menucs 
      <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/category">Category</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/content">Content</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;