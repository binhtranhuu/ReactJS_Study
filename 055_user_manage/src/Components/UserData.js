import React, { Component } from 'react';

class UserData extends Component {

    checkPermission = () => {
        if(this.props.permission === 1){
            return ("Admin")
        } else if(this.props.permission === 2){
            return ("Modrator")
        } else {
            return ("Nomal")
        }
    }

    editUserClick = () => {
        this.props.EditUser();
        this.props.changeEditUserStatus();
    }

    deleteUserClick = (idUser) => {
        this.props.deleteUserClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    {
                        this.checkPermission()
                    }
                </td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={() => this.editUserClick()} type="button" className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                        <button onClick={(idUser) => this.deleteUserClick(this.props.id)} type="button" className="btn btn-danger"><i className="fa fa-trash" /> Xóa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default UserData;