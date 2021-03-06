import React, { Component } from 'react';
import UserData from './UserData';

class TableData extends Component {
    deleteUserClick = (idUser) => {
        this.props.deleteUserClick(idUser);
    }
    render() {
        return (
            <div className="col">
                <h3 className="mb-3">Thông tin nhân sự</h3>
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Họ Tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Quyền</th>
                            <th scope="col">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataUser.map((value, key) => {
                                return (
                                    <UserData deleteUserClick={(idUser) => this.deleteUserClick(idUser)} changeEditUserStatus={() => this.props.changeEditUserStatus()} EditUser={(user) => this.props.Edit(value)} key={key} stt={key+1} id={value.id} name={value.name} phone={value.phone} permission={value.permission}></UserData>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;