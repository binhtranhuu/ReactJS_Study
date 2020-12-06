import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: "",
            newUserData: ""
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    isShowFormAddUser = () => {
        if (this.props.displayFormAddUser === true) {
            return (
                <div className="col">
                    <h3 className="mb-3">Thêm mới nhân sự</h3>
                    <form>
                        <div className="form-group">
                            <label>Họ tên</label>
                            <input onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" id="name" placeholder="Trần Văn A" />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" id="phone" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group">
                            <label>Quyền</label>
                            <select onChange={(event) => this.isChange(event)} name="permission" className="form-control" id="permission">
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <button onClick={(data) => this.props.getNewUserData(this.state.name, this.state.phone, this.state.permission)} type="reset" className="btn btn-success btn-block">Thêm mới</button>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.isShowFormAddUser()
                }
            </div>

        );
    }
}

export default AddUser;