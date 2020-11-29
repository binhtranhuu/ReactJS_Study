import React, { Component } from 'react';

class NoiDung extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps of NoiDung is running');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate of NoiDung is running');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate of NoiDung is running');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate of NoiDung is running');
    }
    
    render() {
        console.log("NoiDung is running");
        return (
            <div>
                <h2>{this.props.ten}</h2>
            </div>
        );
    }
}

export default NoiDung;