import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

    // editStatusInStore = () => {
    //     var test = this.props.dispatch;
    //     test({
    //         type: "EDIT"
    //     })
    // }
    render() {
        return (
            <div>
                <h2>Hello World</h2>
                <p><button onClick={() => this.props.editStatusInStore()}>Click Here</button></p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.status
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editStatusInStore: () => {
            dispatch({
                type: "EDIT"
                }
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)