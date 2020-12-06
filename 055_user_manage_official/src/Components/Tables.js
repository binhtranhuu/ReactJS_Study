import React, { Component } from 'react';
import UserData from './UserData';

class Tables extends Component {
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
                            this.props.dataUsers.map((value, key) => {
                                return (
                                    <UserData
                                    deleteUserData={(data) => this.props.deleteUserData(value)}
                                    editUserData={(data) => this.props.editUserData(value)}
                                    displayFormEditUser={() => this.props.displayFormEditUser()}
                                        key={key}
                                        id={value.id}
                                        stt={key + 1}
                                        name={value.name}
                                        phone={value.phone}
                                        permission={value.permission}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Tables;